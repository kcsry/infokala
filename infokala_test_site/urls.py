from django.conf import settings
from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import RedirectView

from infokala.views import MessagesView, ConfigView

urlpatterns = patterns('',
    url(r'^$', RedirectView.as_view(url='/events/test/messages')),
    url(r'^events/[a-z0-9-]+/messages/?$',
        'django.contrib.staticfiles.views.serve',
        kwargs=dict(path='infokala/infokala.html'),
    ),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages',
        csrf_exempt(MessagesView.as_view()),
        name='infokala_messages_view',
    ),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/config',
        csrf_exempt(ConfigView.as_view()),
        name='infokala_config_view',
    ),    
)
