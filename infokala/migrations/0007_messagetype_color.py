# Generated by Django 1.9 on 2016-03-26 14:51


from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('infokala', '0006_messagecomment_messagecreateevent_messagedeleteevent_messageeditevent_messagestatechangeevent'),
    ]

    operations = [
        migrations.AddField(
            model_name='messagetype',
            name='color',
            field=models.CharField(default='green', help_text='CSS:n hyv\xe4ksym\xe4 v\xe4rim\xe4\xe4ritys', max_length=32, verbose_name='v\xe4ri'),
            preserve_default=False,
        ),
    ]
