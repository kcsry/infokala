from django.db import models

class Event(models.Model):
    name = models.CharField(verbose_name=u"Nimi", max_length=128)
    slug = models.SlugField(verbose_name=u"Tunniste", unique=True, max_length=64, db_index=True)