# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('infokala', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='messagetype',
            name='default',
            field=models.BooleanField(default=False, verbose_name='tapahtuman oletus'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='state',
            name='initial',
            field=models.BooleanField(default=False, help_text='T\xe4m\xe4 tila asetetaan uuden viestin tilaksi. Valitse kussakin ty\xf6nkulussa tasan yksi tila alkutilaksi.', verbose_name='alkutila'),
        ),
    ]
