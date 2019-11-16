from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.contrib.staticfiles.views import serve
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import RedirectView

from infokala.views import ConfigView, MessageEventsView, MessagesView, MessageView

urlpatterns = [
    url(r'^$', RedirectView.as_view(url='/events/test/messages/', permanent=False)),
    url(r'^events/[a-z0-9-]+/messages/$',
        ensure_csrf_cookie(login_required(serve)),
        kwargs=dict(path='infokala/infokala.html'),
    ),
    url(r'^events/(?P<event_slug>[a-z0-9-]+)/messages/config.js$',
        ensure_csrf_cookie(ConfigView.as_view()),
        name='infokala_config_view',
    ),
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/?$',
        ensure_csrf_cookie(MessagesView.as_view()),
        name='infokala_messages_view',
    ),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/(?P<message_id>\d+)/?$',
        ensure_csrf_cookie(MessageView.as_view()),
        name='infokala_message_view',
    ),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/(?P<message_id>\d+)/events?$',
        ensure_csrf_cookie(MessageEventsView.as_view()),
        name='infokala_message_events_view',
    ),
]
