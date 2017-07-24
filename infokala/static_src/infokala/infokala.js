import React from 'react';
import ReactDOM from 'react-dom';

import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';

import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-line no-unused-vars
import infokalaStyle from './infokala.stylus'; // eslint-disable-line no-unused-vars

polyfill();

import InfokalaApp from './InfokalaApp';  // eslint-disable-line import/first

const rootElement = document.createElement('main');
document.body.appendChild(rootElement);

ReactDOM.render(React.createElement(InfokalaApp), rootElement);
