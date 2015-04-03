Promise = require 'bluebird'
ko = require 'knockout'
_ = require 'lodash'

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
    @messageTypes = ko.observable []
    @messageTypeFilters = ko.observable []
    @activeFilter = ko.observable slug: null

    @visibleMessages = ko.computed =>
      if @activeFilter()?.slug
        _.filter @messages(), messageType: @activeFilter()?.slug
      else
        @messages()

    Promise.all([getConfig(), getAllMessages()]).spread (config, messages) =>
      @user config.user
      @author config.user.displayName

      @messageTypes config.messageTypes
      @messageTypeFilters [
        name: 'Kaikki'
        slug: null
        workflow: null
      ].concat config.messageTypes
      @messageType config.defaultMessageType

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
    return if @message() == ""
    sendMessage(
      messageType: @messageType()
      author: @author()
      message: @message()
    ).then =>
      @message ""
      @refresh()
