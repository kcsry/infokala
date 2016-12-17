import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';
import 'jquery';
import 'bootstrap';
import * as ko from 'knockout';

polyfill();

import MainViewModel from './main_view_model';  // eslint-disable-line import/first

ko.applyBindings((window.infokalaMainViewModel = new MainViewModel()));
