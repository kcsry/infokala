Promise = require 'bluebird'

apiUrl = window.infokalaConfig.apiUrl

# GET, DELETE, HEAD, OPTIONS
exports.xhrAsync = (method, path) ->
  new Promise (resolve, reject) ->
    xhr = new XMLHttpRequest
    xhr.addEventListener "error", reject
    xhr.addEventListener "load", resolve
    xhr.open method, path
    xhr.send null


exports.getJSON = (path) ->
  exports.xhrAsync('GET', apiUrl + path).then (event) ->
    JSON.parse event.target.responseText


exports.deleteJSON = (path) ->
  exports.xhrAsync('DELETE', apiUrl + path).then (event) ->
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
  exports.xhrBodyAsync('POST', apiUrl + path, JSON.stringify(obj)).then (event) ->
    JSON.parse event.target.responseText


exports.getMessagesSince = (since) -> exports.getJSON "/?since=#{encodeURIComponent(since)}"
exports.getAllMessages = -> exports.getJSON "/"
exports.sendMessage = (message) -> exports.postJSON "/", message
exports.updateMessage = (messageId, update) -> exports.postJSON "/#{messageId}", update
exports.deleteMessage = (messageId) -> exports.deleteJSON "/#{messageId}"
