from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.contrib.staticfiles.views import serve
from django.urls import path, re_path
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import RedirectView

from infokala.views import ConfigView, MessageEventsView, MessagesView, MessageView

urlpatterns = [
    path('', RedirectView.as_view(url='/events/test/messages/', permanent=False)),
    re_path(r'^events/[a-z0-9-]+/messages/$',
        ensure_csrf_cookie(login_required(serve)),
        kwargs=dict(path='infokala/infokala.html'),
    ),
    re_path(r'^events/(?P<event_slug>[a-z0-9-]+)/messages/config.js$',
        ensure_csrf_cookie(ConfigView.as_view()),
        name='infokala_config_view',
    ),
    path('admin/', admin.site.urls),
    re_path(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/?$',
        ensure_csrf_cookie(MessagesView.as_view()),
        name='infokala_messages_view',
    ),
    re_path(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/(?P<message_id>\d+)/?$',
        ensure_csrf_cookie(MessageView.as_view()),
        name='infokala_message_view',
    ),
    re_path(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/(?P<message_id>\d+)/events?$',
        ensure_csrf_cookie(MessageEventsView.as_view()),
        name='infokala_message_events_view',
    ),
]
