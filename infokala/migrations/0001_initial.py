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
                ('author', models.CharField(max_length=128)),
                ('denorm_event_slug', models.CharField(max_length=64, verbose_name='Tunniste')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('message', models.TextField()),
            ],
            options={
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
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('order', models.IntegerField(default=0)),
                ('name', models.CharField(max_length=128, verbose_name='Nimi')),
                ('slug', models.CharField(max_length=64, verbose_name='Tunniste')),
                ('initial', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ('workflow', 'order'),
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
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='state',
            name='workflow',
            field=models.ForeignKey(to='infokala.Workflow'),
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
            name='user',
            field=models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True),
            preserve_default=True,
        ),
        migrations.AlterIndexTogether(
            name='message',
            index_together=set([('denorm_event_slug', 'created_at')]),
        ),
    ]
