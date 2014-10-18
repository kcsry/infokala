from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    def handle(self, *args, **opts):
        from infokala_test_app.models import Event
        from infokala.models import Workflow, State, MessageType

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
        for workflow, name, slug, initial in [
            (basic_workflow, u'Avoinna', 'open', True),
            (basic_workflow, u'Hoidettu', 'resolved', False),

            (lost_and_found_workflow, u'Kateissa', 'missing', True),
            (lost_and_found_workflow, u'Löydetty', 'found', False),
            (lost_and_found_workflow, u'Palautettu omistajalle', 'returned', False),
        ]:
            State.objects.get_or_create(
                workflow=workflow,
                slug=slug,
                defaults=dict(
                    name=name,
                    order=order,
                    initial=initial,
                ),
            )

            order += 10

        for name, slug, workflow in [
            (u'Löydetty', 'found', lost_and_found_workflow),
            (u'Kateissa', 'missing', basic_workflow),
            (u'Tapahtuma', 'event', basic_workflow),
            (u'Tehtävä', 'task', basic_workflow),
            (u'Kysymys', 'question', basic_workflow),
            (u'Ongelma', 'problem', basic_workflow),
        ]:
            MessageType.objects.get_or_create(
                event_slug=event.slug,
                slug=slug,
                defaults=dict(
                    name=name,
                    workflow=workflow,
                ),
            )
