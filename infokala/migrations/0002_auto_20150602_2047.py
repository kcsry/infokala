# -*- coding: utf-8 -*-


from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('infokala', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='deleted_at',
            field=models.DateTimeField(null=True, verbose_name='poistoaika', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='message',
            name='deleted_by',
            field=models.ForeignKey(related_name='+', verbose_name='poistaja', blank=True, to=settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE),
            preserve_default=True,
        ),
    ]
