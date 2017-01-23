# -- coding: UTF-8 --
from __future__ import unicode_literals

from infokala.models import MessageType, State, Workflow


def create_default_workflows():
    basic_workflow, unused = Workflow.objects.get_or_create(
        slug=u'basic',
        defaults=dict(
            name=u'Perustyönkulku',
        ),
    )

    lost_and_found_workflow, unused = Workflow.objects.get_or_create(
        slug=u'lost-and-found',
        defaults=dict(
            name=u'Löytötavaratyönkulku',
        ),
    )

    simple_workflow, unused = Workflow.objects.get_or_create(
        slug=u'simple',
        defaults=dict(
            name=u'Yksinkertainen työnkulku',
        ),
    )

    order = 0
    for workflow, name, slug, initial, label_class, active in [
        (basic_workflow, u'Avoinna', 'open', True, 'label-primary', True),
        (basic_workflow, u'Hoidettu', 'resolved', False, 'label-success', False),

        (lost_and_found_workflow, u'Kateissa', 'missing', True, 'label-primary', True),
        (lost_and_found_workflow, u'Tuotu Infoon', 'found', False, 'label-info', True),
        (lost_and_found_workflow, u'Palautettu omistajalle', 'returned', False, 'label-success', False),

        (simple_workflow, u'Kirjattu', 'recorded', True, 'label-primary', True),
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

    return dict((wf.slug, wf) for wf in Workflow.objects.all())


def create_default_message_types(event_slug, workflows):
    for name, slug, workflow in [
        (u'Löytötavarat', 'lost-and-found', workflows['lost-and-found']),
        (u'Tehtävä', 'task', workflows['basic']),
        (u'Lokikirja', 'event', workflows['simple']),
    ]:
        message_type, unused = MessageType.objects.get_or_create(
            event_slug=event_slug,
            slug=slug,
            defaults=dict(
                name=name,
                workflow=workflow,
            ),
        )

    # make 'event' default
    message_type.default = True
    message_type.save()
    return dict((mt.slug, mt) for mt in MessageType.objects.filter(event_slug=event_slug))
