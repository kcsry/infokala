import _ from 'lodash';

import { config } from './config_service';


export function getJSON(path) {
  return fetch(config.apiUrl + path, { credentials: 'same-origin' }).then(response => response.json());
}

export function deleteJSON(path) {
  return fetch(config.apiUrl + path, { method: 'delete', credentials: 'same-origin' }).then(
    response => response.json()
  );
}

export function postJSON(path, obj) {
  return fetch(config.apiUrl + path, {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  }
  ).then(response => response.json());
}

export function enrichMessage(message) {
  const messageType = config.messageTypesBySlug[message.messageType];
  return _.extend(message, {
    messageType,
    state: messageType.workflow.statesBySlug[message.state],
  });
}
export function enrichMessages(messages) { return _.map(messages, enrichMessage); }

export function getMessagesSince(since) {
  return exports.getJSON(`/?since=${encodeURIComponent(since)}`).then(enrichMessages);
}
export function getAllMessages() { return exports.getJSON('/').then(enrichMessages); }
export function sendMessage(message) { return exports.postJSON('/', message).then(enrichMessage); }
export function updateMessage(messageId, update) {
  return exports.postJSON(`/${messageId}`, update).then(enrichMessage);
}
export function deleteMessage(messageId) { return exports.deleteJSON(`/${messageId}`).then(enrichMessage); }

export function getMessageEvents(messageId) { return exports.getJSON(`/${messageId}/events`); }
export function postComment(messageId, data) { return exports.postJSON(`/${messageId}/events`, data); }
