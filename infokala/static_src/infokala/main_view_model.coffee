ko = require 'knockout'
_ = require 'lodash'

{getAllMessages, getMessagesSince, sendMessage} = require './message_service.coffee'
{config} = require './config_service.coffee'
MessageViewModel = require './message_view_model.coffee'

refreshMilliseconds = 5 * 1000

module.exports = class MainViewModel
  constructor: ->
    @config = config
    @messages = ko.observableArray []
    @visibleMessages = ko.observableArray []

    @latestMessageTimestamp = null
    @user = ko.observable
      displayName: ""
      username: ""

    # New message author and message fields
    @author = ko.observable config.user.displayName
    @message = ko.observable ""

    # If the "All" filter is active, message type for a new message is selected via a dropdown field.
    # Otherwise it is the message type of the active filter.
    @manualMessageType = ko.observable config.defaultMessageType
    @effectiveMessageType = ko.pureComputed =>
      activeFilter = @activeFilter()

      if activeFilter?.slug
        activeFilter.slug
      else
        @manualMessageType()

    @logoutUrl = ko.observable ""
    @activeFilter = ko.observable slug: null

    # Using ko.pureComputed on @messages would be O(n) on every new or changed message – suicide
    @messagesById = {}
    @messages.subscribe @messageUpdated, null, 'arrayChange'
    @visibleMessages.subscribe @visibleMessageUpdated, null, 'arrayChange'
    @activeFilter.subscribe @filterChanged

    @messageTypeFilters = ko.observable [
      name: 'Kaikki'
      slug: null
    ].concat config.messageTypes

    getAllMessages().then (messages) =>
      @updateMessages messages

      # setup polling
      window.setInterval @refresh, refreshMilliseconds

  refresh: =>
    if @latestMessageTimestamp
      getMessagesSince(@latestMessageTimestamp).then @updateMessages
      # TODO: This could be grouped into a single request instead of one for every open message
      _.forEach(
        _.filter(@messages(), (m) => m.isMessageOpen()),
        (m) => m.updateEvents()
      )
    else
      getAllMessages().then @updateMessages

  updateMessages: (updatedMessages, updateLatestMessageTimestamp=true) =>
    updatedMessages.forEach (messageData) =>
      existingMessage = @messagesById[messageData.id]

      if existingMessage
        existingMessage.updateWith(messageData)
      else
        msg = new MessageViewModel this, messageData
        @messages.push msg
        @visibleMessages.push msg if msg.matchesFilter @activeFilter()

        if updateLatestMessageTimestamp
          if !@latestMessageTimestamp or msg.updatedAt() > @latestMessageTimestamp
            @latestMessageTimestamp = msg.updatedAt()

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

  sendMessage: () =>
    return if @message() == ""
    sendMessage(
      messageType: @effectiveMessageType()
      author: @author()
      message: @message()
    ).then (newMessage) =>
      # Clear the message field
      @message ""
      @updateMessages [newMessage], false

  filterChanged: (newFilter) =>
    @visibleMessages.splice 0, @visibleMessages().length, _.filter(@messages(), (m) => m.matchesFilter newFilter)...

  shouldShowMessageType: => !@activeFilter().slug