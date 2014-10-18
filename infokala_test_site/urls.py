from django.views.decorators.csrf import csrf_exempt
from django.conf.urls import patterns, include, url
from django.contrib import admin

from infokala.views import MessagesView

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/events/(?P<event_slug>[a-z0-9-]+)/messages', csrf_exempt(MessagesView.as_view()), name='infokala_messages_view'),
)
