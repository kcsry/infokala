Promise = require 'bluebird'
ko = require 'knockout'
_ = require 'lodash'

{getAllMessages, getMessagesSince, sendMessage, updateMessage, deleteMessage} = require './message_service.coffee'
{getConfig} = require './config_service.coffee'

refreshMilliseconds = 5 * 1000

module.exports = class MainViewModel
  constructor: ->
    @messages = ko.observableArray []
    @visibleMessages = ko.observableArray []

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
    @logoutUrl = ko.observable ""
    @activeFilter = ko.observable slug: null

    @messageTypesBySlug = ko.pureComputed => _.indexBy @messageTypes(), 'slug'

    # Using ko.pureComputed on @messages would be O(n) on every new or changed message – suicide
    @messagesById = {}
    @messages.subscribe @messageUpdated, null, 'arrayChange'
    @visibleMessages.subscribe @visibleMessageUpdated, null, 'arrayChange'
    @activeFilter.subscribe @filterChanged

    Promise.all([getConfig(), getAllMessages()]).spread (config, messages) =>
      @user config.user
      @author config.user.displayName
      @messageTypes config.messageTypes

      @messageTypeFilters [
        name: 'Kaikki'
        slug: null
      ].concat config.messageTypes
      @manualMessageType config.defaultMessageType
      @logoutUrl config.logoutUrl

      @updateMessages messages

      # setup polling
      window.setInterval @refresh, refreshMilliseconds

  refresh: =>
    if @latestMessageTimestamp
      getMessagesSince(@latestMessageTimestamp).then @updateMessages
    else
      getAllMessages().then @updateMessages

  updateMessages: (updatedMessages, updateLatestMessageTimestamp=true) =>
    messageTypesBySlug = @messageTypesBySlug()

    updatedMessages.forEach (updatedMessage) =>
      existingMessage = @messagesById[updatedMessage.id]

      # unpack denormalized attributes
      messageType = messageTypesBySlug[updatedMessage.messageType]
      _.extend updatedMessage,
        messageType: messageType
        state: messageType.workflow.statesBySlug[updatedMessage.state]

      if existingMessage
        @messages.splice existingMessage.index, 1, updatedMessage
        @visibleMessages.splice existingMessage.visibleIndex, 1, updatedMessage if @matchesFilter updatedMessage
      else
        @messages.push updatedMessage
        @visibleMessages.push updatedMessage if @matchesFilter updatedMessage

        if updateLatestMessageTimestamp
          if !@latestMessageTimestamp or updatedMessage.updatedAt > @latestMessageTimestamp
            @latestMessageTimestamp = updatedMessage.updatedAt

        window.scrollTo 0, document.body.scrollHeight

  visibleMessageUpdated: (changes) =>
    changes.forEach (change) =>
      return unless change.status == 'added'

      message = change.value
      message.visibleIndex = change.index

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

  nextState: (message) =>
    # A, B, C -> A, B, C, A, B, C, ...
    states = message.messageType.workflow.states
    currentStateIndex = _.findIndex states, slug: message.state.slug
    states[currentStateIndex + 1] or states[0]

  cycleMessageState: (message) =>
    return unless @isMessageCycleable message

    updateMessage(message.id, state: @nextState(message).slug).then (updatedMessage) =>
      @updateMessages [updatedMessage], false

  deleteMessage: (message) =>
    if window.confirm("Haluatko varmasti poistaa viestin?")
      deleteMessage(message.id).then (deletedMessage) =>
        @updateMessages [deletedMessage], false

  matchesFilter: (message) =>
    activeFilter = @activeFilter()

    if activeFilter.slug
      message.messageType.slug == @activeFilter().slug
    else
      true

  filterChanged: (newFilter) =>
    @visibleMessages.splice 0, @visibleMessages().length, _.filter(@messages(), @matchesFilter)...

  shouldShowMessageType: => !@activeFilter().slug
  isMessageCycleable: (message) =>
    console?.log 'isMessageCycleable', message
    message.messageType.workflow.states.length > 1
