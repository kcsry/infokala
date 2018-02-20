# encoding: utf-8
from warnings import warn

from django import VERSION
from django.conf import settings
from django.db import models
from django.utils.six import python_2_unicode_compatible
from django.utils.timezone import now

from tzlocal import get_localzone

TIME_FORMAT = '%H:%M:%S'
TZLOCAL = get_localzone()

if VERSION[:2] < (1, 10):
    raise RuntimeError('This version of Lippukala craves Django 1.10+.')


def formatted_time(dt):
    try:
        dt = dt.astimezone(TZLOCAL)
    except ValueError as ve:  # TODO: fix me
        dt = dt
    return dt.time().strftime(TIME_FORMAT)


@python_2_unicode_compatible
class Workflow(models.Model):
    slug = models.CharField(verbose_name='tunniste', max_length=64, unique=True, db_index=True)
    name = models.CharField(verbose_name='nimi', max_length=128)

    class Meta:
        verbose_name = 'työnkulku'
        verbose_name_plural = 'työnkulut'

    def __str__(self):
        return self.name

    @property
    def initial_state(self):
        try:
            return self.state_set.get(initial=True)
        except (State.DoesNotExist, State.MultipleObjectsReturned):
            warn('Workflow "{name}" does not have a unique initial state'.format(name=self.name))
            return self.state_set.order_by('order').first()

    def as_dict(self):
        return dict(
            slug=self.slug,
            name=self.name,
            states=[state.as_dict() for state in self.state_set.all().order_by('order')],
            initialState=self.state_set.get(initial=True).slug,
        )


@python_2_unicode_compatible
class State(models.Model):
    workflow = models.ForeignKey(Workflow, verbose_name='työnkulku', related_name='state_set', on_delete=models.CASCADE)
    order = models.IntegerField(default=0, verbose_name='järjestys')
    name = models.CharField(verbose_name='nimi', max_length=128)
    slug = models.CharField(verbose_name='tunniste', max_length=64)
    active = models.BooleanField(default=True, verbose_name='aktiivinen')
    label_class = models.CharField(verbose_name='label-luokka', max_length=32, blank=True, default='')
    initial = models.BooleanField(
        verbose_name='alkutila',
        help_text='Tämä tila asetetaan uuden viestin tilaksi. Valitse kussakin työnkulussa tasan yksi tila alkutilaksi.',
        default=False
    )

    class Meta:
        verbose_name = 'Tila'
        verbose_name_plural = 'Tilat'
        ordering = ('workflow', 'order')
        index_together = [
            ('workflow', 'order'),
        ]
        unique_together = [
            ('workflow', 'slug'),
        ]

    def __str__(self):
        return self.name

    def as_dict(self):
        return dict(
            slug=self.slug,
            name=self.name,
            active=self.active,
            labelClass=self.label_class,
        )


class MessageType(models.Model):
    event_slug = models.CharField(verbose_name='tapahtuman tunniste', max_length=64, db_index=True)
    name = models.CharField(verbose_name='nimi', max_length=128)
    slug = models.CharField(verbose_name='tunniste', max_length=64)
    workflow = models.ForeignKey(Workflow, verbose_name='työnkulku', related_name='message_type_set', on_delete=models.CASCADE)
    default = models.BooleanField(default=False, verbose_name='tapahtuman oletus')
    color = models.CharField(verbose_name='väri', max_length=32, help_text='CSS:n hyväksymä värimääritys')

    class Meta:
        verbose_name = 'viestityyppi'
        verbose_name_plural = 'viestityypit'
        unique_together = [
            ('event_slug', 'slug'),
        ]

    def __str__(self):
        return self.name

    @property
    def event(self):
        return settings.INFOKALA_GET_EVENT_OR_404(self.event_slug) if self.event_slug else None

    def as_dict(self):
        return dict(
            name=self.name,
            slug=self.slug,
            workflow=self.workflow.slug,
            color=self.color
        )


@python_2_unicode_compatible
class Message(models.Model):
    message_type = models.ForeignKey(MessageType, verbose_name='viestityyppi', related_name='message_set', on_delete=models.CASCADE)
    message = models.TextField(verbose_name='viesti')
    author = models.CharField(verbose_name='kirjoittaja', max_length=128)

    state = models.ForeignKey(State, on_delete=models.CASCADE)

    created_by = models.ForeignKey(
        'auth.User',
        verbose_name='lisääjä',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.CASCADE,
    )
    updated_by = models.ForeignKey(
        'auth.User',
        verbose_name='viimeisin muokkaaja',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.CASCADE,
    )
    deleted_by = models.ForeignKey(
        'auth.User',
        verbose_name='poistaja',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.CASCADE,
    )

    event_slug = models.CharField(verbose_name='tapahtuman tunniste', max_length=64)

    created_at = models.DateTimeField(verbose_name='lisäysaika', auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name='muokkausaika', auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True, verbose_name='poistoaika')

    @property
    def is_deleted(self):
        return self.deleted_at is not None

    class Meta:
        verbose_name = 'viesti'
        verbose_name_plural = 'viestit'
        index_together = [
            ('event_slug', 'created_at'),
        ]

    def __str__(self):
        return self.message

    def save(self, *args, **kwargs):
        if not self.state_id and self.message_type_id:
            self.state = self.message_type.workflow.initial_state

        if not self.event_slug and self.message_type_id:
            self.event_slug = self.message_type.event_slug

        if not self.author and self.user_id:
            self.author = self.user.username

        return super(Message, self).save(*args, **kwargs)

    @property
    def formatted_time(self):
        return formatted_time(self.created_at)

    def as_dict(self):
        return dict(
            id=self.id,
            messageType=self.message_type.slug,

            # will not give out the message text if the message is deleted
            message=self.message if not self.is_deleted else None,

            author=self.author,
            isDeleted=self.is_deleted,
            createdBy=self.created_by.username if self.created_by else None,
            updatedBy=self.updated_by.username if self.updated_by else None,
            deletedBy=self.deleted_by.username if self.deleted_by else None,
            createdAt=self.created_at.isoformat(),
            updatedAt=self.updated_at.isoformat(),
            deletedAt=self.deleted_at.isoformat() if self.deleted_at else None,
            state=self.state.slug,
            formattedTime=self.formatted_time,
            commentAmount=self.messagecomment_set.count()
        )

    def mark_deleted(self, by_user=None):
        self.deleted_by = by_user
        self.deleted_at = now()


class MessageEventBase(models.Model):
    """A MessageEventBase is either a state change event or a comment on a message."""
    message = models.ForeignKey(Message, verbose_name='viesti', related_name='%(class)s_set', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    author = models.CharField(verbose_name='muokkaaja', max_length=128)

    def as_dict(self):
        return dict(
            createdAt=self.created_at.isoformat(),
            formattedTime=self.formatted_time,
            author=self.author
        )

    @property
    def formatted_time(self):
        return formatted_time(self.created_at)

    class Meta:
        ordering = ['-created_at']
        abstract = True


class MessageStateChangeEvent(MessageEventBase):
    old_state = models.ForeignKey(State, related_name='+', on_delete=models.CASCADE)
    new_state = models.ForeignKey(State, related_name='+', on_delete=models.CASCADE)

    def as_dict(self):
        return dict(
            MessageEventBase.as_dict(self),
            type="statechange",
            oldState=self.old_state.slug,
            newState=self.new_state.slug
        )


class MessageEditEvent(MessageEventBase):
    # text represents the new text of the message
    text = models.TextField(verbose_name='viesti')

    def as_dict(self):
        return dict(
            MessageEventBase.as_dict(self),
            type="edit",
            text=self.text
        )


class MessageComment(MessageEventBase):
    comment = models.TextField(verbose_name='kommentti')

    def as_dict(self):
        return dict(
            MessageEventBase.as_dict(self),
            type="comment",
            comment=self.comment
        )


class MessageCreateEvent(MessageEventBase):
    text = models.TextField(verbose_name='viesti')

    def as_dict(self):
        return dict(
            MessageEventBase.as_dict(self),
            type="create",
            text=self.text
        )


class MessageDeleteEvent(MessageEventBase):
    def as_dict(self):
        return dict(
            MessageEventBase.as_dict(self),
            type="delete"
        )
