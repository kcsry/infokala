import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';
import * as ko from 'knockout';

import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-line no-unused-vars
import infokalaStyle from './infokala.stylus'; // eslint-disable-line no-unused-vars

polyfill();

import MainViewModel from './main_view_model'; // eslint-disable-line import/first

ko.applyBindings((window.infokalaMainViewModel = new MainViewModel()));
