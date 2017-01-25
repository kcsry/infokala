import json

from django.shortcuts import resolve_url

import pytest

from infokala.models import Message
from infokala_tests.utils import get_data_from_response


@pytest.mark.django_db
def test_message_create_and_retrieve(dd, admin_client):
    messages_api_view = resolve_url('infokala_messages_view', event_slug=dd.event.slug)

    retr_message_1 = get_data_from_response(admin_client.post(
        messages_api_view,
        json.dumps({'messageType': 'event', 'author': 'Infocorgi', 'message': 'Vuh!', }),
        content_type='application/json',
    ))

    message = Message.objects.get(
        id=retr_message_1['id'],
        author='Infocorgi',
        message='Vuh!'
    )
    assert message.state.initial  # initial state got set

    messages = get_data_from_response(admin_client.get(messages_api_view))
    assert len(messages) == 1
    retr_message_2 = messages[0]

    assert retr_message_2['message'] == 'Vuh!'
    assert retr_message_2['author'] == 'Infocorgi'

    message_api_view = resolve_url('infokala_message_view', event_slug=dd.event.slug, message_id=retr_message_2['id'])
    retr_message_3 = get_data_from_response(admin_client.get(message_api_view))
    assert retr_message_1 == retr_message_2 == retr_message_3  # check all endpoints agree on the content


@pytest.mark.django_db
def test_message_edit(dd, admin_client):
    messages_api_view = resolve_url('infokala_messages_view', event_slug=dd.event.slug)

    id = get_data_from_response(admin_client.post(
        messages_api_view,
        json.dumps({'messageType': 'task', 'author': 'Infocorgi', 'message': 'Vuh!', }),
        content_type='application/json',
    ))['id']
    message_api_view = resolve_url('infokala_message_view', event_slug=dd.event.slug, message_id=id)
    message = Message.objects.get(id=id)

    get_data_from_response(admin_client.post(
        message_api_view,
        json.dumps({'state': message.state.slug, 'message': 'Bork!', 'author': 'Info-Gabe'}),
        content_type='application/json',
    ))

    message.refresh_from_db()
    assert message.state.initial  # state did not change
    assert message.message == 'Bork!'
    assert message.author == 'Infocorgi'  # actual message author does not change
    assert message.messageeditevent_set.first().author == 'Info-Gabe'  # but is recorded
    assert message.messagecreateevent_set.first().text == 'Vuh!'  # old text still there too


@pytest.mark.django_db
def test_message_state(dd, admin_client):
    messages_api_view = resolve_url('infokala_messages_view', event_slug=dd.event.slug)

    id = get_data_from_response(admin_client.post(
        messages_api_view,
        json.dumps({'messageType': 'task', 'author': 'Infocorgi', 'message': 'Vuh!', }),
        content_type='application/json',
    ))['id']
    message_api_view = resolve_url('infokala_message_view', event_slug=dd.event.slug, message_id=id)
    message = Message.objects.get(id=id)

    get_data_from_response(admin_client.post(
        message_api_view,
        json.dumps({'state': 'resolved', 'message': 'Vuh!', 'author': 'Info-Gabe'}),
        content_type='application/json',
    ))
    old_state = message.state
    message.refresh_from_db()
    new_state = message.state
    assert new_state.slug == 'resolved'  # state did change
    state_change = message.messagestatechangeevent_set.get()
    assert state_change.old_state == old_state
    assert state_change.new_state == new_state
    assert state_change.author == 'Info-Gabe'


@pytest.mark.django_db
def test_anon_cant_post(dd, client):
    api_view = resolve_url('infokala_messages_view', event_slug=dd.event.slug)
    assert client.post(
        api_view,
        json.dumps({'messageType': 'event', 'author': 'Infocorgi', 'message': 'Vuh!', }),
        content_type='application/json',
    ).status_code == 403
