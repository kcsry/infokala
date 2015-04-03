from django import forms


class MessagesGetForm(forms.Form):
    since = forms.DateTimeField(required=False)
