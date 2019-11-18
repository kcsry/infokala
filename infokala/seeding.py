# -- coding: UTF-8 --


from infokala.models import MessageType, State, Workflow


def create_default_workflows():
    basic_workflow, unused = Workflow.objects.get_or_create(
        slug='basic',
        defaults=dict(
            name='Perustyönkulku',
        ),
    )

    lost_and_found_workflow, unused = Workflow.objects.get_or_create(
        slug='lost-and-found',
        defaults=dict(
            name='Löytötavaratyönkulku',
        ),
    )

    simple_workflow, unused = Workflow.objects.get_or_create(
        slug='simple',
        defaults=dict(
            name='Yksinkertainen työnkulku',
        ),
    )

    order = 0
    for workflow, name, slug, initial, label_class, active in [
        (basic_workflow, 'Avoinna', 'open', True, 'label-primary', True),
        (basic_workflow, 'Hoidettu', 'resolved', False, 'label-success', False),

        (lost_and_found_workflow, 'Kateissa', 'missing', True, 'label-primary', True),
        (lost_and_found_workflow, 'Tuotu Infoon', 'found', False, 'label-info', True),
        (lost_and_found_workflow, 'Palautettu omistajalle', 'returned', False, 'label-success', False),

        (simple_workflow, 'Kirjattu', 'recorded', True, 'label-primary', True),
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

    return {wf.slug: wf for wf in Workflow.objects.all()}


def create_default_message_types(event_slug, workflows):
    for name, slug, workflow in [
        ('Löytötavarat', 'lost-and-found', workflows['lost-and-found']),
        ('Tehtävä', 'task', workflows['basic']),
        ('Lokikirja', 'event', workflows['simple']),
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
    return {mt.slug: mt for mt in MessageType.objects.filter(event_slug=event_slug)}
