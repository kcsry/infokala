from random import choice

import pytest
from django.utils.text import slugify

from infokala_test_app.models import Event


@pytest.fixture
def event():
    name = choice(['Kiva', 'Kissa', 'Doge', 'Nnep']) + 'con'
    return Event.objects.create(name=name, slug=slugify(name))
