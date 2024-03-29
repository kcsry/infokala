import { config } from './config_service';

function getCSRFToken() {
  return /csrftoken=([^&]+)/.exec(document.cookie)[1];
}

export function getJSON(path) {
  return fetch(config.apiUrl + path, {
    credentials: 'same-origin',
  }).then((response) => response.json());
}

export function deleteJSON(path) {
  return fetch(config.apiUrl + path, {
    method: 'delete',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
  }).then((response) => response.json());
}

export function postJSON(path, obj) {
  return fetch(config.apiUrl + path, {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCSRFToken(),
    },
    body: JSON.stringify(obj),
  }).then((response) => response.json());
}

export function enrichMessage(message) {
  const messageType = config.messageTypesBySlug[message.messageType];
  return Object.assign(message, {
    messageType,
    state: messageType.workflow.statesBySlug[message.state],
  });
}
export function enrichMessages(messages) {
  return messages.map(enrichMessage);
}

export function getMessagesSince(since) {
  return getJSON(`/?since=${encodeURIComponent(since)}`).then(enrichMessages);
}
export function getAllMessages() {
  return getJSON('/').then(enrichMessages);
}
export function sendMessage(message) {
  return postJSON('/', message).then(enrichMessage);
}
export function updateMessage(messageId, update) {
  return postJSON(`/${messageId}`, update).then(enrichMessage);
}
export function deleteMessage(messageId) {
  return deleteJSON(`/${messageId}`).then(enrichMessage);
}

export function getMessageEvents(messageId) {
  return getJSON(`/${messageId}/events`);
}
export function postComment(messageId, data) {
  return postJSON(`/${messageId}/events`, data);
}
