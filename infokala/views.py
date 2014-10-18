import json

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.views.generic import View

from typevalidator import validate


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
        return 200, dict(hello="world")

    def _post(self, request, event, data):
        if not validate(MESSAGE_SCHEMA, data):
            return 400, JSON_BAD_REQUEST

        message_type = get_object_or_404(MessageType, pk=data['message_type'])
        message = Message.objects.create(
            message_type=message_type,
            user=request.user,
        )


        return 200, data
