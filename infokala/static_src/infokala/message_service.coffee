_ = require 'lodash'
Promise = require 'bluebird'

{config} = require './config_service.coffee'

# GET, DELETE, HEAD, OPTIONS
exports.xhrAsync = (method, path) ->
  new Promise (resolve, reject) ->
    xhr = new XMLHttpRequest
    xhr.addEventListener "error", reject
    xhr.addEventListener "load", resolve
    xhr.open method, path
    xhr.send null


exports.getJSON = (path) ->
  exports.xhrAsync('GET', config.apiUrl + path).then (event) ->
    JSON.parse event.target.responseText


exports.deleteJSON = (path) ->
  exports.xhrAsync('DELETE', config.apiUrl + path).then (event) ->
    JSON.parse event.target.responseText


# POST, PUT, PATCH
exports.xhrBodyAsync = (method, path, data) ->
  new Promise (resolve, reject) ->
    xhr = new XMLHttpRequest
    xhr.addEventListener "error", reject
    xhr.addEventListener "load", resolve
    xhr.open method, path
    xhr.setRequestHeader "Content-type", "application/json"
    xhr.send data


exports.postJSON = (path, obj) ->
  exports.xhrBodyAsync('POST', config.apiUrl + path, JSON.stringify(obj)).then (event) ->
    JSON.parse event.target.responseText


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
