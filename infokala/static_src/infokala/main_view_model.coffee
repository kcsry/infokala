Promise = require 'bluebird'
ko = require 'knockout'
_ = require 'lodash'

{getAllMessages, getMessagesSince, getConfig, sendMessage, updateMessage} = require './message_service.coffee'

refreshMilliseconds = 5 * 1000

module.exports = class MainViewModel
  constructor: ->
    @messages = ko.observableArray []
    @latestMessageTimestamp = null
    @user = ko.observable
      displayName: ""
      username: ""

    # New message author and message fields
    @author = ko.observable ""
    @message = ko.observable ""

    # If the "All" filter is active, message type for a new message is selected via a dropdown field.
    # Otherwise it is the message type of the active filter.
    @manualMessageType = ko.observable ""
    @effectiveMessageType = ko.pureComputed =>
      activeFilter = @activeFilter()

      if activeFilter?.slug
        activeFilter.slug
      else
        @manualMessageType()

    @messageTypes = ko.observable []
    @messageTypeFilters = ko.observable []
    @activeFilter = ko.observable slug: null

    # XXX O(n) on every new or changed message - bad
    @visibleMessages = ko.pureComputed =>
      activeFilter = @activeFilter()

      if activeFilter?.slug
        _.filter @messages(), (message) -> message.messageType.slug == activeFilter.slug
      else
        @messages()

    @messageTypesBySlug = ko.pureComputed => _.indexBy @messageTypes(), 'slug'

    # Using ko.pureComputed would be O(n) on every new or changed message – suicide
    @messagesById = {}
    @messages.subscribe @messageUpdated, null, 'arrayChange'

    Promise.all([getConfig(), getAllMessages()]).spread (config, messages) =>
      @user config.user
      @author config.user.displayName

      @messageTypes config.messageTypes
      @messageTypeFilters [
        name: 'Kaikki'
        slug: null
      ].concat config.messageTypes
      @manualMessageType config.defaultMessageType

      @updateMessages messages

      # setup polling
      window.setInterval @refresh, refreshMilliseconds

  refresh: =>
    getMessagesSince(@latestMessageTimestamp).then @newMessages

  updateMessages: (updatedMessages, updateLatestMessageTimestamp=true) =>
    updatedMessages.forEach (updatedMessage) =>
      existingMessage = @messagesById[updatedMessage.id]

      if existingMessage
        @messages.splice existingMessage.index, 1, updatedMessage
      else
        @messages.push updatedMessage

        if updateLatestMessageTimestamp
          if !@latestMessageTimestamp or updatedMessage.updatedAt > @latestMessageTimestamp
            @latestMessageTimestamp = updatedMessage.updatedAt

        window.scrollTo 0, document.body.scrollHeight

  messageUpdated: (changes) =>
    changes.forEach (change) =>
      return unless change.status == 'added'

      message = change.value
      message.index = change.index
      @messagesById[message.id] = message

  sendMessage: (formElement) =>
    return if @message() == ""
    sendMessage(
      messageType: @effectiveMessageType()
      author: @author()
      message: @message()
    ).then (newMessage) =>
      # clear the message field
      @message ""

      @updateMessages [newMessage], false

  cycleMessageState: (message) =>
    return unless @isMessageCycleable(message)

    # figure out next state
    states = message.messageType.workflow.states
    currentStateIndex = _.findIndex states, slug: message.state.slug
    console?.log 'currentStateIndex', currentStateIndex
    nextState = states[currentStateIndex + 1] or states[0]

    updateMessage(message.id, state: nextState.slug).then (updatedMessage) =>
      @updateMessages [updatedMessage], false

  shouldShowMessageType: => !@activeFilter().slug
  isMessageCycleable: (message) => message.messageType.workflow.states.length > 1
