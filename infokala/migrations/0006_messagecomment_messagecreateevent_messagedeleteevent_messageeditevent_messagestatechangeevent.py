# Generated by Django 1.9 on 2016-01-06 13:18


import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('infokala', '0005_auto_20151219_1304'),
    ]

    operations = [
        migrations.CreateModel(
            name='MessageComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.CharField(max_length=128, verbose_name='muokkaaja')),
                ('comment', models.TextField(verbose_name='kommentti')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_set', to='infokala.Message', verbose_name='viesti')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MessageCreateEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.CharField(max_length=128, verbose_name='muokkaaja')),
                ('text', models.TextField(verbose_name='viesti')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_set', to='infokala.Message', verbose_name='viesti')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MessageDeleteEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.CharField(max_length=128, verbose_name='muokkaaja')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_set', to='infokala.Message', verbose_name='viesti')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MessageEditEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.CharField(max_length=128, verbose_name='muokkaaja')),
                ('text', models.TextField(verbose_name='viesti')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_set', to='infokala.Message', verbose_name='viesti')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MessageStateChangeEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.CharField(max_length=128, verbose_name='muokkaaja')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_set', to='infokala.Message', verbose_name='viesti')),
                ('new_state', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='infokala.State')),
                ('old_state', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='infokala.State')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
    ]
