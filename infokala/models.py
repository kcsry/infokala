# encoding: utf-8

from warnings import warn

from django.conf import settings
from django.db import models


class Workflow(models.Model):
    name = models.CharField(verbose_name=u'nimi', max_length=128)

    class Meta:
        verbose_name = u'työnkulku'
        verbose_name_plural = u'työnkulut'

    def __unicode__(self):
        return self.name

    @property
    def initial_state(self):
        try:
            return self.state_set.get(initial=True)
        except (State.DoesNotExist, State.MultipleObjectsReturned):
            warn(u'Workflow "{name}" does not have a unique initial state'.format(name=self.name))
            return self.state_set.order_by('order').first()


class State(models.Model):
    workflow = models.ForeignKey(Workflow, verbose_name=u'työnkulku', related_name='state_set')
    order = models.IntegerField(default=0, verbose_name=u'järjestys')
    name = models.CharField(verbose_name=u'nimi', max_length=128)
    slug = models.CharField(verbose_name=u'tunniste', max_length=64)
    initial = models.BooleanField(
        verbose_name=u'alkutila',
        help_text=u'Tämä tila asetetaan uuden viestin tilaksi. Valitse kussakin työnkulussa tasan yksi tila alkutilaksi.',
        default=False
    )

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
    event_slug = models.CharField(verbose_name=u'tapahtuman tunniste', max_length=64, db_index=True)
    name = models.CharField(verbose_name=u'nimi', max_length=128)
    slug = models.CharField(verbose_name=u'tunniste', max_length=64)
    workflow = models.ForeignKey(Workflow, verbose_name=u'työnkulku', related_name='message_type_set')

    class Meta:
        verbose_name = u'viestityyppi'
        verbose_name_plural = u'viestityypit'
        unique_together = [
            ('event_slug', 'slug'),
        ]

    def __unicode__(self):
        return self.name

    @property
    def event(self):
        return settings.INFOKALA_GET_EVENT_OR_404(self.event_slug) if self.event_slug else None

    def as_dict(self):
        return dict(
            name=self.name,
            slug=self.slug,
        )

class Message(models.Model):
    message_type = models.ForeignKey(MessageType, verbose_name=u'viestityyppi', related_name='message_set')
    message = models.TextField(verbose_name=u'viesti')
    author = models.CharField(verbose_name=u'kirjoittaja', max_length=128)

    state = models.ForeignKey(State, null=True, blank=True)

    created_by = models.ForeignKey('auth.User',
        verbose_name=u'lisääjä',
        null=True,
        blank=True,
        related_name='+',
    )
    updated_by = models.ForeignKey('auth.User',
        verbose_name=u'viimeisin muokkaaja',
        null=True,
        blank=True,
        related_name='+',
    )

    denorm_event_slug = models.CharField(verbose_name=u'tapahtuman tunniste', max_length=64)

    created_at = models.DateTimeField(verbose_name=u'lisäysaika', auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name=u'muokkausaika', auto_now=True)

    class Meta:
        verbose_name = u'viesti'
        verbose_name_plural = u'viestit'
        index_together = [
            ('denorm_event_slug', 'created_at'),
        ]

    def __unicode__(self):
        return self.message

    def save(self, *args, **kwargs):
        if not self.state_id and self.message_type_id:
            self.state = self.message_type.workflow.initial_state

        if not self.denorm_event_slug and self.message_type_id:
            self.denorm_event_slug = self.message_type.event_slug

        if not self.author and self.user_id:
            self.author = self.user.username

        return super(Message, self).save(*args, **kwargs)

    def as_dict(self):
        return dict(
            messageType=self.message_type.slug,
            message=self.message,
            author=self.author,
            createdBy=self.created_by.username if self.created_by else None,
            updatedBy=self.updated_by.username if self.updated_by else None,
            state=self.state.slug if self.state_id else None,
        )
