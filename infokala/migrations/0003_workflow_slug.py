# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('infokala', '0002_auto_20150602_2047'),
    ]

    operations = [
        migrations.AddField(
            model_name='workflow',
            name='slug',
            field=models.CharField(max_length=64, verbose_name='tunniste', blank=True),
        ),
    ]
