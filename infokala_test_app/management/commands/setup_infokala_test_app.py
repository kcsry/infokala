# encoding: utf-8
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from infokala.models import Message, MessageType
from infokala.seeding import create_default_message_types, create_default_workflows
from infokala_test_app.models import Event


class Command(BaseCommand):
    def handle(self, *args, **opts):

        user, created = get_user_model().objects.get_or_create(
            username='mahti',
            is_superuser=True,
            is_staff=True,
        )
        if created:
            user.set_password('mahti')
            user.save()

        event, unused = Event.objects.get_or_create(
            slug='test',
            defaults=dict(
                name=u'Testitapahtuma',
            )
        )

        workflows = create_default_workflows()
        create_default_message_types(event_slug=event.slug, workflows=workflows)

        if not Message.objects.exists():
            message_type = MessageType.objects.get(event_slug=event.slug, slug='event')
            for author, example_message in [
                (u'Korppu', u'INFOSSA ON CORGI :333333'),
                (u'Japsu', u'apua, tuun sinne :3'),
            ]:
                Message(
                    message_type=message_type,
                    message=example_message,
                    author=author,
                    created_by=user,
                ).save()
