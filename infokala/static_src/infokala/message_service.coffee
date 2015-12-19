_ = require 'lodash'
Promise = require 'bluebird'

{config} = require './config_service.coffee'


exports.getJSON = (path) ->
  fetch(config.apiUrl + path, credentials: 'same-origin').then (response) -> response.json()


exports.deleteJSON = (path) ->
  fetch(config.apiUrl + path, method: 'delete', credentials: 'same-origin').then (response) -> response.json()


exports.postJSON = (path, obj) ->
  fetch(config.apiUrl + path,
    method: 'post'
    credentials: 'same-origin'
    headers:
      'Content-Type': 'application/json'
    body: JSON.stringify(obj)
  ).then (response) -> response.json()


exports.getMessagesSince = (since) -> exports.getJSON("/?since=#{encodeURIComponent(since)}").then enrichMessages
exports.getAllMessages = -> exports.getJSON('/').then enrichMessages
exports.sendMessage = (message) -> exports.postJSON('/', message).then enrichMessage
exports.updateMessage = (messageId, update) -> exports.postJSON("/#{messageId}", update).then enrichMessage
exports.deleteMessage = (messageId) -> exports.deleteJSON("/#{messageId}").then enrichMessage


enrichMessages = (messages) ->
  messages.forEach enrichMessage
  messages


enrichMessage = (message) ->
  # unpack denormalized attributes
  messageType = config.messageTypesBySlug[message.messageType]

  _.extend message,
    messageType: messageType
    state: messageType.workflow.statesBySlug[message.state]
