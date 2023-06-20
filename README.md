# Infokala – Info log management system for events

## Getting started

Assuming you have Python 3.9+, `pip` and `virtualenv` installed.

    git clone git@github.com:japsu/infokala
    virtualenv venv-infokala
    source venv-infokala/bin/activate
    cd infokala
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py setup_infokala_test_app
    python manage.py runserver
    open http://localhost:8000

`setup_infokala_test_app` created an user called `mahti` with the password `mahti`.

## Frontend development

Frontend development tools require Node.JS (0.10.x). These are needed only during development, not runtime.

    npm install
    npm start

This starts a server on `localhost:8000` and watches for changes to files under `infokala/static_src` compiling them to `infokala/static`.

## License

    The MIT License (MIT)

    Copyright (c) 2014–2017 Santtu Pajukanta, Aarni Koskela, Anssi Matti Helin

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
