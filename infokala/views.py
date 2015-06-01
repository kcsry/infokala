import json
import logging

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.views.generic import View

from dateutil.parser import parse as parse_datetime

from .models import Message, MessageType
from .forms import MessagesGetForm


JSON_FORBIDDEN = dict(
    status=403,
    message="Forbidden",
)

JSON_BAD_REQUEST = dict(
    status=400,
    message="Bad request",
)

JSON_NOT_FOUND = dict(
    status=404,
    message="Not found"
)


logger = logging.getLogger(__name__)


def validate(data_dict, *field_names):
    """
    Validates that the untrusted data contains the given fields and only them, and that they are
    strings.

    >>> validate({'a': 'foo'}, 'a')
    >>> validate({'a': 'foo'}, 'a', 'b')
    Traceback (most recent call last):
      File "<console>", line 1, in <module>
      File "/Users/japsu/Hobby/infokala/infokala/views.py", line 42, in validate
        raise ValueError()
    ValueError
    >>> validate({'a': 'foo', 'b': 5}, 'a')
    Traceback (most recent call last):
      File "<console>", line 1, in <module>
      File "/Users/japsu/Hobby/infokala/infokala/views.py", line 42, in validate
        raise ValueError()
    ValueError
    >>> validate({'a': 'foo', 'b': 5}, 'a', 'b')
    Traceback (most recent call last):
      File "<console>", line 1, in <module>
      File "/Users/japsu/Hobby/infokala/infokala/views.py", line 46, in validate
        raise ValueError()
    ValueError
    >>> validate({'a': 'foo', 'b': '5'}, 'a', 'b')
    """

    # TODO better reporting
    if set(data_dict.keys()) != set(field_names):
        raise ValueError()

    for value in data_dict.values():
        if not isinstance(value, basestring):
            raise ValueError()


class ApiView(View):
    def authenticate(self, request, event):
        """
        Override to perform access control. Return True to allow access or False to disallow.
        Default implementation only allows authenticated users.
        """
        return request.user.is_authenticated()

    def get(self, request, event_slug, *args, **kwargs):
        event = settings.INFOKALA_GET_EVENT_OR_404(event_slug)

        if not self.authenticate(request, event):
            return HttpResponse(
                json.dumps(JSON_FORBIDDEN),
                status=403,
                content_type='application/json',
            )

        status, response = self._get(request, event, *args, **kwargs)
        return HttpResponse(
            json.dumps(response),
            status=status,
            content_type='application/json',
        )

    def post(self, request, event_slug, *args, **kwargs):
        event = settings.INFOKALA_GET_EVENT_OR_404(event_slug)

        if not self.authenticate(request, event):
            return HttpResponse(
                json.dumps(JSON_FORBIDDEN),
                status=403,
                content_type='application/json',
            )

        try:
            data = json.loads(request.body)
        except ValueError:
            return HttpResponse(
                json.dumps(dict(JSON_BAD_REQUEST, reason='document body is not valid JSON')),
                status=400,
                content_type='application/json'
            )

        status, response = self._post(request, event, data, *args, **kwargs)
        return HttpResponse(
            json.dumps(response),
            status=status,
            content_type='application/json'
        )


class MessagesView(ApiView):
    def _get(self, request, event):
        criteria = dict(event_slug=event.slug)

        since = request.GET.get('since')
        if since:
            try:
                since = parse_datetime(since)
            except ValueError:
                return 400, dict(JSON_BAD_REQUEST, reason='unable to parse since parameter')

            criteria.update(updated_at__gt=since)

        messages = Message.objects.filter(**criteria).order_by('created_at')
        return 200, [msg.as_dict() for msg in messages]

    def _post(self, request, event, data):
        if not validate(data, 'messageType', 'message', 'author'):
            return 400, dict(JSON_BAD_REQUEST, reason='request body failed validation')

        message_type = MessageType.objects.filter(
            event_slug=event.slug,
            slug=data['messageType'],
        ).first()

        if not message_type:
            return 400, dict(JSON_BAD_REQUEST, reason='invalid messageType')

        message = Message.objects.create(
            author=data['author'],
            message=data['message'],
            message_type=message_type,
            created_by=request.user,
        )

        return 200, message.as_dict()


class MessageView(ApiView):
    def _get(self, request, event, message_id):
        message = Message.objects.filter(event_slug=event.slug, id=int(message_id)).first()

        if not message:
            return 404, JSON_NOT_FOUND

        return 200, message.as_dict()

    def _post(self, request, event, data, message_id):
        message = Message.objects.filter(event_slug=event.slug, id=int(message_id)).first()

        if not message:
            return 404, JSON_NOT_FOUND

        logger.warn('data %s', data)

        if not validate(data, 'state'):
            return 400, dict(JSON_BAD_REQUEST, reason='request body failed validation')

        new_state = message.message_type.workflow.state_set.filter(
            slug=data['state'],
        ).first()

        if not new_state:
            return 400, dict(JSON_BAD_REQUEST, reason='invalid state')

        if message.state != new_state:
            message.updated_by = request.user
            message.state = new_state
            message.save()

        return 200, message.as_dict()


class ConfigView(ApiView):
    def _get(self, request, event):
        message_types = MessageType.objects.filter(event_slug=event.slug)

        try:
            default_message_type = message_types.get(default=True)
        except MessageType.DoesNotExist:
            default_message_type = message_types.first()

        return 200, dict(
            event=dict(
                slug=event.slug,
                name=event.name,
            ),
            messageTypes=[mt.as_dict() for mt in message_types],
            defaultMessageType=default_message_type.slug,
            user=dict(
                displayName=request.user.get_full_name() or request.user.username,
                username=request.user.username
            )
        )
