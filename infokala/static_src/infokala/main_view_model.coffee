Promise = require 'bluebird'
ko = require 'knockout'

{getAllMessages, getMessagesSince, getConfig} = require './message_service.coffee'

refreshMilliseconds = 5 * 1000

module.exports = class MainViewModel
  constructor: ->
    @messages = ko.observableArray []
    @latestMessageTimestamp = null
    @user = ko.observable
      displayName: ""
      username: ""

    Promise.all([getConfig(), getAllMessages()]).spread (config, messages) =>
      @messageTypes = config.messageTypes
      @user config.user
      @newMessages messages
      @setupPolling()

  newMessages: (newMessages) =>
    newMessages.forEach (message) =>
      @messages.push message
      @latestMessageTimestamp = message.createdAt

  setupPolling: =>
    window.setInterval @refresh, refreshMilliseconds

  refresh: =>
    getMessagesSince(@latestMessageTimestamp).then @newMessages
