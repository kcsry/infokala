# -*- coding: utf-8 -*-


from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=128, verbose_name='Nimi')),
                ('slug', models.SlugField(unique=True, max_length=64, verbose_name='Tunniste')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
