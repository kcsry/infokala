#!/usr/bin/env python

import os
from setuptools import setup

def requirements(filename):
    with open(os.path.abspath(os.path.join(os.path.dirname(__file__), filename))) as f:
        lines = (line.strip() for line in f)
        return [line for line in lines if line and not line.startswith('#')]

setup(
    name='infokala',
    version='0.0.1',
    description='Info log management system for Desucon and Tracon',
    author='Santtu Pajukanta',
    author_email='japsu@desucon.fi',
    url='https://github.com/japsu/infokala',
    packages=['infokala'],
    package_data={'infokala': ['static/infokala/*']},
    include_package_data=True,
    zip_safe=False,
    install_requires=requirements('requirements.txt'),
)
