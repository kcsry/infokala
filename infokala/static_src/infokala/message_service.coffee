Promise = require 'bluebird'

apiUrl = window.infokalaConfig.apiUrl


exports.getAsync = (path) ->
  new Promise (resolve, reject) ->
    xhr = new XMLHttpRequest
    xhr.addEventListener "error", reject
    xhr.addEventListener "load", resolve
    xhr.open "GET", path
    xhr.send null


exports.getJSON = (path) ->
  exports.getAsync(apiUrl + path).then (event) ->
    JSON.parse event.target.responseText


exports.postAsync = (path, data) ->
  new Promise (resolve, reject) ->
    xhr = new XMLHttpRequest
    xhr.addEventListener "error", reject
    xhr.addEventListener "load", resolve
    xhr.open "POST", path
    xhr.setRequestHeader "Content-type", "application/json"
    xhr.send data


exports.postJSON = (path, obj) ->
  exports.postAsync(apiUrl + path, JSON.stringify(obj)).then (event) ->
    JSON.parse event.target.responseText


exports.getConfig = -> Promise.resolve window.infokalaConfig # XXX hack
exports.getMessagesSince = (since) -> exports.getJSON "/?since=#{encodeURIComponent(since)}"
exports.getAllMessages = -> exports.getJSON "/"
exports.sendMessage = (message) -> exports.postJSON "/", message
exports.updateMessage = (messageId, update) -> exports.postJSON "/#{messageId}", update
