import json

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.views.generic import View

from typevalidator import validate

from .models import Message, MessageType


JSON_FORBIDDEN = json.dumps(dict(
    status=403,
    message="Forbidden",
))

JSON_BAD_REQUEST = json.dumps(dict(
    status=400,
    message="Bad request",
))


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
                JSON_FORBIDDEN,
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
                JSON_FORBIDDEN,
                status=403,
                content_type='application/json',
            )

        try:
            data = json.loads(request.body)
        except ValueError:
            return HttpResponse(
                JSON_BAD_REQUEST,
                status=400,
                content_type='application/json'
            )            

        status, response = self._post(request, event, data, *args, **kwargs)
        return HttpResponse(
            json.dumps(response),
            status=status,
            content_type='application/json'
        )


MESSAGE_SCHEMA = dict(
    message_type=unicode,
    message=unicode,
    author=unicode,
)


class MessagesView(ApiView):
    def _get(self, request, event):
        messages = Message.objects.filter(denorm_event_slug=event.slug).order_by('created_at')
        return 200, [msg.as_dict() for msg in messages]

    def _post(self, request, event, data):
        if not validate(MESSAGE_SCHEMA, data):
            return 400, JSON_BAD_REQUEST

        message_type = get_object_or_404(MessageType,
            event_slug=event.slug,
            slug=data['message_type'],
        )

        message = Message.objects.create(
            author=data['author'],
            message=data['message'],
            message_type=message_type,
            created_by=request.user,
        )

        return 200, message.as_dict()


class ConfigView(ApiView):
    def _get(self, request, event):
        message_types = MessageType.objects.filter(event_slug=event.slug)

        return 200, dict(
            event=dict(
                slug=event.slug,
                name=event.name,
            ),
            messageTypes=dict((mt.slug, mt.as_dict()) for mt in message_types)
        )
