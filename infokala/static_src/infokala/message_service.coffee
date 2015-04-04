Promise = require 'bluebird'

apiUrl = "/api/v1/events/test"


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


exports.getConfig = -> exports.getJSON "/config"
exports.getMessagesSince = (since) -> exports.getJSON "/messages?since=#{encodeURIComponent(since)}"
exports.getAllMessages = -> exports.getJSON "/messages"
exports.sendMessage = (message) -> exports.postJSON "/messages", message
exports.updateMessage = (message) -> exports.postJSON "/messages/#{message.id}", message
