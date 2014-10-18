# encoding: utf-8

from django.conf import settings
from django.db import models


class Workflow(models.Model):
    name = models.CharField(verbose_name=u'Nimi', max_length=128)

    class Meta:
        verbose_name = u'Työnkulku'
        verbose_name_plural = u'Työnkulut'

    def __unicode__(self):
        return self.name

    @property
    def initial_state(self):
        try:
            return self.state_set.get(initial=True)
        except (State.DoesNotExist, State.MultipleObjectsReturned):
            from warnings import warn
            warn(u'Workflow "{name}" does not have a unique initial state'.format(name=self.name))

            return self.state_set.order_by('order').first()


class State(models.Model):
    workflow = models.ForeignKey(Workflow, verbose_name=u'Työnkulku')
    order = models.IntegerField(default=0, verbose_name=u'Järjestys')
    name = models.CharField(verbose_name=u'Nimi', max_length=128)
    slug = models.CharField(verbose_name=u'Tunniste', max_length=64)
    initial = models.BooleanField(verbose_name=u'Alkutila', default=False)

    class Meta:
        verbose_name = u'Tila'
        verbose_name_plural = u'Tilat'
        ordering = ('workflow', 'order')
        index_together = [
            ('workflow', 'order'),
        ]
        unique_together = [
            ('workflow', 'slug'),
        ]

    def __unicode__(self):
        return self.name

class MessageType(models.Model):
    event_slug = models.CharField(verbose_name=u'Tunniste', max_length=64, db_index=True)
    name = models.CharField(verbose_name=u'Nimi', max_length=128)
    slug = models.CharField(verbose_name=u'Tunniste', max_length=64)
    workflow = models.ForeignKey(Workflow, verbose_name=u'Työnkulku')

    class Meta:
        verbose_name = u'Viestityyppi'
        verbose_name_plural = u'Viestityypit'
        unique_together = [
            ('event_slug', 'slug'),
        ]

    def __unicode__(self):
        return self.name

    @property
    def event(self):
        return settings.INFOKALA_GET_EVENT_OR_404(self.event_slug) if self.event_slug else None


class Message(models.Model):
    message_type = models.ForeignKey(MessageType)
    state = models.ForeignKey(State)

    user = models.ForeignKey('auth.User',
        verbose_name=u'Lisääjä',
        null=True,
        blank=True,
    )
    author = models.CharField(verbose_name=u'Kirjoittaja', max_length=128)

    denorm_event_slug = models.CharField(verbose_name=u'Tunniste', max_length=64)

    created_at = models.DateTimeField(verbose_name=u'Lisäysaika', auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name=u'Muokkausaika', auto_now=True)

    message = models.TextField(verbose_name=u'Viesti')

    def save(self, *args, **kwargs):
        if self.state is None and self.message_type is not None:
            self.state = self.message_type.initial_state

        if self.denorm_event_slug is None and self.message_type is not None:
            self.denorm_event_slug = self.message_type.event_slug

        if not self.author and self.user is not None:
            self.author = self.user.username

        return super(Message, self).save(*args, **kwargs)

    class Meta:
        verbose_name = u'Viesti'
        verbose_name_plural = u'Viestit'
        index_together = [
            ('denorm_event_slug', 'created_at'),
        ]

    def __unicode__(self):
        return self.message
