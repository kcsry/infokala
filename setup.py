#!/usr/bin/env python

from setuptools import setup

setup(
    name='infokala',
    version='0.4',
    description='Info log management system for Desucon and Tracon',
    author='Santtu Pajukanta',
    author_email='japsu@desucon.fi',
    url='https://github.com/japsu/infokala',
    packages=['infokala', 'infokala.migrations'],
    package_data={'infokala': ['static/infokala/*']},
    include_package_data=True,
    zip_safe=False,
    install_requires=['Django>=1.7', 'python-dateutil>=2.4.2'],
)
