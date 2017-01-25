# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import re
from django.db import models, migrations


SLUGIFY_CHAR_MAP = {
  u'ä': u'a',
  u'å': u'a',
  u'ö': u'o',
  u'ü': u'u',
  u' ': u'-',
  u'_': u'-',
  u'.': u'-',
}
SLUGIFY_FORBANNAD_RE = re.compile(r'[^a-z0-9-]', re.UNICODE)
SLUGIFY_MULTIDASH_RE = re.compile(r'-+', re.UNICODE)


def slugify(ustr):
    ustr = ustr.lower()
    ustr = u''.join(SLUGIFY_CHAR_MAP.get(c, c) for c in ustr)
    ustr = SLUGIFY_FORBANNAD_RE.sub(u'', ustr)
    ustr = SLUGIFY_MULTIDASH_RE.sub(u'-', ustr)
    return ustr


def populate_slug(apps, schema_editor):
    Workflow = apps.get_model('infokala', 'Workflow')
    for workflow in Workflow.objects.all():
        if not workflow.slug:
            workflow.slug = slugify(workflow.name)
            workflow.save()


class Migration(migrations.Migration):

    dependencies = [
        ('infokala', '0003_workflow_slug'),
    ]

    operations = [
        migrations.RunPython(populate_slug)
    ]
