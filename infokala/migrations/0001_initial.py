# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('message', models.TextField(verbose_name='viesti')),
                ('author', models.CharField(max_length=128, verbose_name='kirjoittaja')),
                ('event_slug', models.CharField(max_length=64, verbose_name='tapahtuman tunniste')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='lis\xe4ysaika')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='muokkausaika')),
                ('created_by', models.ForeignKey(related_name=b'+', verbose_name='lis\xe4\xe4j\xe4', blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'verbose_name': 'viesti',
                'verbose_name_plural': 'viestit',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='MessageType',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('event_slug', models.CharField(max_length=64, verbose_name='tapahtuman tunniste', db_index=True)),
                ('name', models.CharField(max_length=128, verbose_name='nimi')),
                ('slug', models.CharField(max_length=64, verbose_name='tunniste')),
                ('default', models.BooleanField(default=False, verbose_name='tapahtuman oletus')),
            ],
            options={
                'verbose_name': 'viestityyppi',
                'verbose_name_plural': 'viestityypit',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('order', models.IntegerField(default=0, verbose_name='j\xe4rjestys')),
                ('name', models.CharField(max_length=128, verbose_name='nimi')),
                ('slug', models.CharField(max_length=64, verbose_name='tunniste')),
                ('active', models.BooleanField(default=True, verbose_name='aktiivinen')),
                ('label_class', models.CharField(default='', max_length=32, verbose_name='label-luokka', blank=True)),
                ('initial', models.BooleanField(default=False, help_text='T\xe4m\xe4 tila asetetaan uuden viestin tilaksi. Valitse kussakin ty\xf6nkulussa tasan yksi tila alkutilaksi.', verbose_name='alkutila')),
            ],
            options={
                'ordering': ('workflow', 'order'),
                'verbose_name': 'Tila',
                'verbose_name_plural': 'Tilat',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Workflow',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=128, verbose_name='nimi')),
            ],
            options={
                'verbose_name': 'ty\xf6nkulku',
                'verbose_name_plural': 'ty\xf6nkulut',
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='state',
            name='workflow',
            field=models.ForeignKey(related_name=b'state_set', verbose_name='ty\xf6nkulku', to='infokala.Workflow'),
            preserve_default=True,
        ),
        migrations.AlterUniqueTogether(
            name='state',
            unique_together=set([('workflow', 'slug')]),
        ),
        migrations.AlterIndexTogether(
            name='state',
            index_together=set([('workflow', 'order')]),
        ),
        migrations.AddField(
            model_name='messagetype',
            name='workflow',
            field=models.ForeignKey(related_name=b'message_type_set', verbose_name='ty\xf6nkulku', to='infokala.Workflow'),
            preserve_default=True,
        ),
        migrations.AlterUniqueTogether(
            name='messagetype',
            unique_together=set([('event_slug', 'slug')]),
        ),
        migrations.AddField(
            model_name='message',
            name='message_type',
            field=models.ForeignKey(related_name=b'message_set', verbose_name='viestityyppi', to='infokala.MessageType'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='message',
            name='state',
            field=models.ForeignKey(to='infokala.State'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='message',
            name='updated_by',
            field=models.ForeignKey(related_name=b'+', verbose_name='viimeisin muokkaaja', blank=True, to=settings.AUTH_USER_MODEL, null=True),
            preserve_default=True,
        ),
        migrations.AlterIndexTogether(
            name='message',
            index_together=set([('event_slug', 'created_at')]),
        ),
    ]
