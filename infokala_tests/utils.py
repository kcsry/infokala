import json
from random import choice

import pytest
from django.utils.text import slugify

from infokala.seeding import create_default_workflows, create_default_message_types
from infokala_test_app.models import Event


@pytest.fixture
def event():
    name = choice(['Kiva', 'Kissa', 'Doge', 'Nnep']) + 'con'
    return Event.objects.create(name=name, slug=slugify(name))


class DefaultData:
    def __init__(self, event):
        self.event = event
        self.workflows = create_default_workflows()
        self.message_types = create_default_message_types(event.slug, self.workflows)


@pytest.fixture
def dd(event):  # dd is short for `default data` here.
    return DefaultData(event)


def get_data_from_response(response, status_code=200):
    if status_code:  # pragma: no branch
        assert response.status_code == status_code, (
            "Status %s is not the expected %s" % (response.status_code, status_code)
        )

    data = json.loads(response.content.decode('utf-8'))
    return data
