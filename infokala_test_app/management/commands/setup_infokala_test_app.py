# encoding: utf-8

from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    def handle(self, *args, **opts):
        from infokala_test_app.models import Event
        from infokala.models import Workflow, State, MessageType, Message
        from django.contrib.auth.models import User

        user, created = User.objects.get_or_create(
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

        basic_workflow, unused = Workflow.objects.get_or_create(
            name=u'Perustyönkulku',
        )

        lost_and_found_workflow, unused = Workflow.objects.get_or_create(
            name=u'Löytötavaratyönkulku',
        )

        order = 0
        for workflow, name, slug, initial, label_class, active in [
            (basic_workflow, u'Avoinna', 'open', True, 'label-primary', True),
            (basic_workflow, u'Hoidettu', 'resolved', False, 'label-success', False),

            (lost_and_found_workflow, u'Kateissa', 'missing', True, 'label-primary', True),
            (lost_and_found_workflow, u'Löydetty', 'found', False, 'label-info', True),
            (lost_and_found_workflow, u'Palautettu omistajalle', 'returned', False, 'label-success', False),
        ]:
            state, created = State.objects.get_or_create(
                workflow=workflow,
                slug=slug,
                defaults=dict(
                    name=name,
                    order=order,
                    initial=initial,
                ),
            )

            state.label_class = label_class
            state.active = active
            state.save()

            order += 10

        for name, slug, workflow in [
            (u'Löydetty', 'found', lost_and_found_workflow),
            (u'Kateissa', 'missing', basic_workflow),
            (u'Tehtävä', 'task', basic_workflow),
            (u'Kysymys', 'question', basic_workflow),
            (u'Ongelma', 'problem', basic_workflow),
            (u'Tapahtuma', 'event', basic_workflow),
        ]:
            message_type, unused = MessageType.objects.get_or_create(
                event_slug=event.slug,
                slug=slug,
                defaults=dict(
                    name=name,
                    workflow=workflow,
                ),
            )

        # make 'event' default
        message_type.default = True
        message_type.save()

        if not Message.objects.exists():
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
