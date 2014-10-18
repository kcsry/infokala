Promise = require 'bluebird'
ko = require 'knockout'

{getMessages, getConfig} = require './message_service.coffee'

module.exports = class MainViewModel
  constructor: ->
    @messages = ko.observableArray []

    Promise.all([getConfig(), getMessages()]).spread (config, messages) =>
      @messageTypes = config.messageTypes
      @refresh messages

  refresh: -> getMessages().then (newMessages) =>
    @messages.push message for message in newMessages
