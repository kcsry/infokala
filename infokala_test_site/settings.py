import os


def mkpath(*parts):
    return os.path.abspath(os.path.join(os.path.dirname(__file__), '..', *parts))

BASE_DIR = mkpath()

SECRET_KEY = '6g*1v8@jh5dohgl6%n+9l9%k9g3__9#5@7bptzawuis-4*git#'

DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'infokala',
    'infokala_test_app',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'infokala_test_site.urls'

WSGI_APPLICATION = 'infokala_test_site.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

LANGUAGE_CODE = 'fi-fi'
TIME_ZONE = 'Europe/Helsinki'
USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = mkpath('static')

LOGIN_URL = '/admin/login/'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': False,
        'OPTIONS': {
            'context_processors': ['django.contrib.auth.context_processors.auth'],
        },
        'DEBUG': DEBUG
    },
]


def get_event(slug):
    from django.shortcuts import get_object_or_404
    from infokala_test_app.models import Event
    return get_object_or_404(Event, slug=slug)

INFOKALA_GET_EVENT_OR_404 = get_event
