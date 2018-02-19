from __future__ import unicode_literals

import json
import logging
from itertools import chain

from django.conf import settings
from django.urls import reverse
from django.http import HttpResponse
from django.utils import six
from django.utils.encoding import force_text
from django.utils.timezone import now
from django.views.generic import View

from dateutil.parser import parse as parse_datetime

from .models import (
    Message, MessageComment, MessageCreateEvent, MessageEditEvent, MessageStateChangeEvent, MessageType, Workflow
)

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


class ValidationError(ValueError):
    msg_template = '{}'

    def __init__(self, *args):
        super(ValidationError, self).__init__(*args)
        self.msg = self.msg_template.format(args)

    def as_dict(self):
        return dict(
            status=400,
            message=self.msg,
            fields=self.args,
        )


class RequiredFieldsMissing(ValidationError):
    msg_template = 'Required fields missing: {}'


class ExtraFieldsPresent(ValidationError):
    msg_template = 'Extra fields present: {}'


class FieldTypeMismatch(ValidationError):
    msg_template = 'Field type mismatch: {}'


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

    expected = set(field_names)
    got = set(data_dict.keys())

    extra_keys = got - expected
    if extra_keys:
        raise ExtraFieldsPresent(*extra_keys)

    missing_keys = expected - got
    if missing_keys:
        raise RequiredFieldsMissing(*missing_keys)

    type_mismatches = [key for (key, value) in six.iteritems(data_dict) if not isinstance(value, six.text_type)]
    if type_mismatches:
        raise FieldTypeMismatch(*type_mismatches)


class ApiView(View):
    http_method_names = ['get']

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
            data = json.loads(force_text(request.body))
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

    def delete(self, request, event_slug, *args, **kwargs):
        event = settings.INFOKALA_GET_EVENT_OR_404(event_slug)

        if not self.authenticate(request, event):
            return HttpResponse(
                json.dumps(JSON_FORBIDDEN),
                status=403,
                content_type='application/json',
            )

        status, response = self._delete(request, event, *args, **kwargs)

        return HttpResponse(
            json.dumps(response),
            status=status,
            content_type='application/json'
        )


class MessagesView(ApiView):
    http_method_names = ['get', 'post']

    def _get(self, request, event):
        criteria = dict(event_slug=event.slug)

        since = request.GET.get('since')
        if since:
            try:
                since = parse_datetime(since)
            except ValueError:
                return 400, dict(JSON_BAD_REQUEST, reason='unable to parse since parameter')

            criteria.update(updated_at__gt=since)
        else:
            criteria.update(deleted_at__isnull=True)

        messages = Message.objects.filter(**criteria).order_by('created_at')
        return 200, [msg.as_dict() for msg in messages]

    def _post(self, request, event, data):
        try:
            validate(data, 'messageType', 'message', 'author')
        except ValidationError as e:
            return 400, e.as_dict()

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

        event = MessageCreateEvent(message=message, author=message.author, text=data['message'])
        event.save()

        return 200, message.as_dict()


class MessageView(ApiView):
    http_method_names = ['get', 'post', 'delete']

    def _get(self, request, event, message_id):
        message = Message.objects.filter(
            event_slug=event.slug,
            id=int(message_id)
        ).first()

        if not message:
            return 404, JSON_NOT_FOUND

        if message.is_deleted:
            return 410, message.as_dict()  # Gone

        return 200, message.as_dict()

    # XXX actually PATCH instead of POST
    def _post(self, request, event, data, message_id):
        message = Message.objects.filter(event_slug=event.slug, id=int(message_id), deleted_at__isnull=True).first()

        if not message:
            return 404, JSON_NOT_FOUND

        try:
            validate(data, 'state', 'message', 'author')
        except ValidationError as e:
            return 400, e.as_dict()

        new_state = message.message_type.workflow.state_set.filter(
            slug=data['state'],
        ).first()

        if not new_state:
            return 400, dict(JSON_BAD_REQUEST, reason='invalid state')

        if message.state != new_state or message.message != data['message']:
            # Do NOT update the visible message creator when editing, but store the current username in the edit log
            events = []
            if message.state != new_state:
                events.append(MessageStateChangeEvent(message=message, author=data['author'],
                                                      old_state=message.state, new_state=new_state))
            if message.message != data['message']:
                events.append(MessageEditEvent(message=message, author=data['author'], text=data['message']))

            message.updated_by = request.user
            message.state = new_state
            message.message = data['message']
            message.save()

            for event in events:
                event.save()

        return 200, message.as_dict()

    def _delete(self, request, event, message_id):
        message = Message.objects.filter(event_slug=event.slug, id=int(message_id), deleted_at__isnull=True).first()

        if not message:
            return 404, JSON_NOT_FOUND

        message.mark_deleted(request.user)
        message.save()

        return 200, message.as_dict()


class MessageEventsView(ApiView):
    http_method_names = ['get', 'post']

    def _get(self, request, event, message_id):
        message = Message.objects.filter(
            event_slug=event.slug,
            id=int(message_id)
        ).prefetch_related(
            "messagecreateevent_set",
            "messagestatechangeevent_set",
            "messageeditevent_set",
            "messagecomment_set",
            "messagedeleteevent_set"
        ).first()

        if not message:
            return 404, JSON_NOT_FOUND

        events = sorted(chain(
            message.messagecreateevent_set.all(),
            message.messagestatechangeevent_set.all(),
            message.messageeditevent_set.all(),
            message.messagecomment_set.all(),
            message.messagedeleteevent_set.all()
        ), key=lambda it: it.created_at, reverse=True)
        return 200, [message_event.as_dict() for message_event in events]

    def _post(self, request, event, data, message_id):
        message = Message.objects.filter(event_slug=event.slug, id=int(message_id)).first()

        if not message:
            return 404, JSON_NOT_FOUND

        try:
            validate(data, 'author', 'comment')
        except ValidationError as e:
            return 400, e.as_dict()

        event = MessageComment(message=message, author=data['author'], comment=data['comment'])
        event.save()

        message.updated_at = now()
        message.save()

        return 200, event.as_dict()


class ConfigView(ApiView):
    def get(self, request, event_slug, *args, **kwargs):
        event = settings.INFOKALA_GET_EVENT_OR_404(event_slug)

        if not self.authenticate(request, event):
            return HttpResponse(
                json.dumps(JSON_FORBIDDEN),
                status=403,
                content_type='application/json',
            )

        try:
            status, response = self._get(request, event)
        except ConfigurationError as e:
            # In an error situation, return only the error message
            return HttpResponse(
                "window.infokalaConfig = {{'error': '{}'}};".format(str(e)),
                status=200,  # This hurts, but <script> tags with non-200 statuses aren't handled ":D"
                content_type='text/javascript'
            )

        # In a normal situation, the response payload is a dict to be JSONified
        return HttpResponse(
            "window.infokalaConfig = {};".format(json.dumps(response)),
            status=status,
            content_type='text/javascript',
        )

    def _get(self, request, event):
        message_types = MessageType.objects.filter(event_slug=event.slug)
        workflows = Workflow.objects.filter(message_type_set__event_slug=event.slug)

        if len(message_types) < 1:
            raise ConfigurationError('No message types specified, please configure them in the Django admin panel')

        if len(workflows) < 1:
            raise ConfigurationError('No workflows specified, please configure them in the Django admin panel')

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
            workflows=[wf.as_dict() for wf in workflows],
            defaultMessageType=default_message_type.slug,
            user=dict(
                displayName=request.user.get_full_name() or request.user.username,
                username=request.user.username
            ),
            apiUrl=reverse('infokala_messages_view', kwargs=dict(event_slug=event.slug)),
            logoutUrl=getattr(settings, 'LOGOUT_URL', '/logout/'),
        )


class ConfigurationError(Exception):
    pass
