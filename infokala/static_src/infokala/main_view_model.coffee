Promise = require 'bluebird'
ko = require 'knockout'

{getAllMessages, getMessagesSince, getConfig, sendMessage} = require './message_service.coffee'

refreshMilliseconds = 5 * 1000

module.exports = class MainViewModel
  constructor: ->
    @messages = ko.observableArray []
    @latestMessageTimestamp = null
    @user = ko.observable
      displayName: ""
      username: ""

    @author = ko.observable ""
    @message = ko.observable ""
    @messageType = ko.observable ""

    # XXX hardcoded
    @messageTypes = ko.observableArray [
      'event'
    ]

    Promise.all([getConfig(), getAllMessages()]).spread (config, messages) =>
      @messageTypes = config.messageTypes
      @user config.user
      @author config.user.displayName
      @newMessages messages
      @setupPolling()

  newMessages: (newMessages) =>
    newMessages.forEach (message) =>
      @messages.push message
      @latestMessageTimestamp = message.createdAt
      window.scrollTo 0, document.body.scrollHeight

  setupPolling: =>
    window.setInterval @refresh, refreshMilliseconds

  refresh: =>
    getMessagesSince(@latestMessageTimestamp).then @newMessages

  sendMessage: (formElement) =>
    sendMessage(
      messageType: 'event' # XXX hardcoded
      author: @author()
      message: @message()
    ).then @refresh
