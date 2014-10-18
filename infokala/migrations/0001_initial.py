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
                ('message', models.TextField(verbose_name='Viesti')),
                ('author', models.CharField(max_length=128, verbose_name='Kirjoittaja')),
                ('denorm_event_slug', models.CharField(max_length=64, verbose_name='Tunniste')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Lis\xe4ysaika')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Muokkausaika')),
                ('created_by', models.ForeignKey(related_name=b'+', verbose_name='Lis\xe4\xe4j\xe4', blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'verbose_name': 'Viesti',
                'verbose_name_plural': 'Viestit',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='MessageType',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('event_slug', models.CharField(max_length=64, verbose_name='Tunniste', db_index=True)),
                ('name', models.CharField(max_length=128, verbose_name='Nimi')),
                ('slug', models.CharField(max_length=64, verbose_name='Tunniste')),
            ],
            options={
                'verbose_name': 'Viestityyppi',
                'verbose_name_plural': 'Viestityypit',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('order', models.IntegerField(default=0, verbose_name='J\xe4rjestys')),
                ('name', models.CharField(max_length=128, verbose_name='Nimi')),
                ('slug', models.CharField(max_length=64, verbose_name='Tunniste')),
                ('initial', models.BooleanField(default=False, verbose_name='Alkutila')),
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
                ('name', models.CharField(max_length=128, verbose_name='Nimi')),
            ],
            options={
                'verbose_name': 'Ty\xf6nkulku',
                'verbose_name_plural': 'Ty\xf6nkulut',
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='state',
            name='workflow',
            field=models.ForeignKey(verbose_name='Ty\xf6nkulku', to='infokala.Workflow'),
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
            field=models.ForeignKey(verbose_name='Ty\xf6nkulku', to='infokala.Workflow'),
            preserve_default=True,
        ),
        migrations.AlterUniqueTogether(
            name='messagetype',
            unique_together=set([('event_slug', 'slug')]),
        ),
        migrations.AddField(
            model_name='message',
            name='message_type',
            field=models.ForeignKey(to='infokala.MessageType'),
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
            field=models.ForeignKey(related_name=b'+', verbose_name='Viimeisin muokkaaja', blank=True, to=settings.AUTH_USER_MODEL, null=True),
            preserve_default=True,
        ),
        migrations.AlterIndexTogether(
            name='message',
            index_together=set([('denorm_event_slug', 'created_at')]),
        ),
    ]
