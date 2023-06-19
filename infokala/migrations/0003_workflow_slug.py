# -*- coding: utf-8 -*-


from django.db import migrations, models


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
