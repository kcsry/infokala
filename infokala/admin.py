from django.contrib import admin

from .models import Workflow, State, MessageType, Message


class StateInline(admin.TabularInline):
    model = State
    list_display = ('workflow', 'name', 'initial', 'order')
    list_filter = ('workflow',)
    extra = 0


class WorkflowAdmin(admin.ModelAdmin):
    list_display = ('name',)
    inlines = [StateInline]


class MessageTypeAdmin(admin.ModelAdmin):
    list_display = ('event_slug', 'name', 'workflow')
    list_filter = ('event_slug', 'workflow')


class MessageAdmin(admin.ModelAdmin):
    list_display = ('denorm_event_slug', 'author', 'message', 'message_type')
    list_filter = ('denorm_event_slug', 'message_type')
    exclude = ('denorm_event_slug',)

admin.site.register(Workflow, WorkflowAdmin)
admin.site.register(MessageType, MessageTypeAdmin)
admin.site.register(Message, MessageAdmin)
