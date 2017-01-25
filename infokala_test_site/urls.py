from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.views import serve
from django.contrib.auth.decorators import login_required

from infokala.views import MessagesView, MessageView, ConfigView, MessageEventsView

urlpatterns = [
    url(r'^$', RedirectView.as_view(url='/events/test/messages/', permanent=False)),
    url(r'^events/[a-z0-9-]+/messages/$',
        login_required(serve),
        kwargs=dict(path='infokala/infokala.html'),
    ),
    url(r'^events/(?P<event_slug>[a-z0-9-]+)/messages/config.js$',
        csrf_exempt(ConfigView.as_view()),
        name='infokala_config_view',
    ),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/?$',
        csrf_exempt(MessagesView.as_view()),
        name='infokala_messages_view',
    ),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/(?P<message_id>\d+)/?$',
        csrf_exempt(MessageView.as_view()),
        name='infokala_message_view',
    ),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages/(?P<message_id>\d+)/events?$',
        csrf_exempt(MessageEventsView.as_view()),
        name='infokala_message_events_view',
    ),
]
