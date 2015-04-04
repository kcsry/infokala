# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('infokala', '0002_auto_20150403_1930'),
    ]

    operations = [
        migrations.AddField(
            model_name='state',
            name='active',
            field=models.BooleanField(default=True, verbose_name='aktiivinen'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='state',
            name='label_class',
            field=models.CharField(default=b'', max_length=32, verbose_name='label-luokka', blank=True),
            preserve_default=True,
        ),
    ]
