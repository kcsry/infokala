#!/usr/bin/env python

import json
import os
from setuptools import setup


def mkpath(*parts):
    return os.path.abspath(os.path.join(os.path.dirname(__file__), *parts))


def requirements(filename):
    with open(filename) as f:
        lines = (line.strip() for line in f)
        return [line for line in lines if line and not line.startswith('#')]


with open(mkpath('package.json')) as package_json:
    VERSION = json.loads(package_json.read())['version']


setup(
    name='infokala',
    version=VERSION,
    description='Info log management system for Desucon and Tracon',
    author='Santtu Pajukanta',
    author_email='japsu@desucon.fi',
    url='https://github.com/japsu/infokala',
    packages=['infokala', 'infokala.migrations'],
    package_data={'infokala': ['static/infokala/*']},
    include_package_data=True,
    zip_safe=False,
    install_requires=requirements(mkpath('requirements.txt')),
)
