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

      if activeFilter?.type
        activeFilter.type
      else
        @manualMessageType()

    @logoutUrl = ko.observable ""

    # Using ko.pureComputed on @messages would be O(n) on every new or changed message – suicide
    @messagesById = {}
    @messages.subscribe @messageUpdated, null, 'arrayChange'
    @visibleMessages.subscribe @visibleMessageUpdated, null, 'arrayChange'

    @messageTypeFilters = ko.observable [
      name: 'Kaikki'
      slug: null
    ].concat config.messageTypes

    # Special objects used as special filters
    @filterAll = {name: 'Kaikki', slug: '_all', fn: (m) => true}
    @filterActive = {name: 'Aktiiviset', slug: '_active', fn: (m) => m.state().active}
    @messageStateSpecialFilters = ko.observable [@filterAll, @filterActive]
    @messageStateFilters = ko.observableArray []

    # activeFilter stores the type slug and state object we are matching against, possibly including some special cases
    @activeFilter = ko.observable type: null, state: @filterAll
    @activeFilter.subscribe @filterChanged

    window.addEventListener('hashchange', () => @updateFilterFromHash window.location.hash)
    if window.location.hash
      @updateFilterFromHash window.location.hash

    @shouldShowNewMessageWarning = ko.pureComputed () =>
        filter = @activeFilter()
        config.messageTypesBySlug[filter.type]?.workflow.states.indexOf(filter.state) > 0

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

  updateFilterFromHash: (hash) =>
    [type, state] = hash.substring(1).split("/", 2)

    # If there is a missing type, reset the filter
    if not type
      return @activeFilter {type: null, state: @filterAll}

    # Only refresh the filter if it has changed
    filter = @activeFilter()
    activeType = if not filter.type then "_all" else filter.type
    return unless type != activeType or state != filter.state.slug

    # Filter type
    typeObj = null
    filter.type = null
    if type != "_all" and type of config.messageTypesBySlug
      typeObj = config.messageTypesBySlug[type]
      filter.type = type

    # Filter state
    filter.state = @filterAll
    if state
      # Special state filters are always
      if state.startsWith("_")
        findIn = @messageStateSpecialFilters()
      # Non-special state filters are allowed when type is non-special
      else if filter.type
        findIn = config.messageTypesBySlug[filter.type]?.workflow.states || []
      found = _.find(findIn, (s) => s.slug == state)
      if found
        filter.state = found

    @activeFilter filter
    if typeObj
      @updateFilterStates typeObj

  updateHashFromFilter: () =>
    filter = @activeFilter()
    type = if filter.type == null then "_all" else filter.type
    state = filter.state.slug
    if type == state == "_all"
      window.location.hash = ''
    else if state == "_all"
      window.location.hash = '#' + type
    else
      window.location.hash = '#' + type + "/" + state

  updateFilterStates: (messageType) =>
    if not messageType.slug or messageType.workflow.states.length < 2
      return @messageStateFilters.removeAll()

    @messageStateFilters.splice 0, @messageStateFilters().length, messageType.workflow.states...

  setFilterType: (messageType) =>
    @activeFilter _.extend @activeFilter(), type: messageType.slug
    filter = @activeFilter()
    filter.type = messageType.slug
    @activeFilter {type: messageType.slug, state: @filterAll}
    @updateFilterStates messageType

  setFilterState: (messageState) =>
    @activeFilter _.extend @activeFilter(), state: messageState
    @updateHashFromFilter()
    @activeFilter _.extend @activeFilter(), type: messageType.slug
    filter = @activeFilter()
    filter.type = messageType.slug
    @activeFilter {type: messageType.slug, state: @filterAll}
    @updateFilterStates messageType
    @updateHashFromFilter()

  setFilterState: (messageState) =>
    @activeFilter _.extend @activeFilter(), state: messageState
    @updateHashFromFilter()

  shouldShowFilters: () =>
    # Show filters if we're showing all items or messages of a type with more than one state
    !@activeFilter().type || config.messageTypesBySlug[@activeFilter().type].workflow.states.length > 1

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

  shouldShowMessageType: () => !@activeFilter().type
