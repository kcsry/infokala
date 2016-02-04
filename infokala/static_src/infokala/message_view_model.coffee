ko = require 'knockout'
_ = require 'lodash'

{getMessageEvents, postComment, updateMessage, deleteMessage} = require './message_service.coffee'

module.exports = class MessageViewModel
  constructor: (app, data) ->
    #{"formattedTime": "15:39:08",
    # "createdAt": "2016-01-06T13:39:08.811603+00:00",
    # "author": "Author",
    # "updatedAt": "2016-01-06T13:39:08.811644+00:00",
    # "messageType": "event",
    # "deletedBy": null,
    # "state": "recorded",
    # "commentAmount": 0,
    # "createdBy": "user",
    # "updatedBy": null,
    # "deletedAt": null,
    # "message": "Lorem ipsum dolor sit amet",
    # "id": 1,
    # "isDeleted": false}

    @app = app

    # Properties straight from the API
    # Formatted time: What is this?
    @formattedTime = ko.observable data.formattedTime || ""

    # Created at: The creation time of the message. Immutable.
    @createdAt = data.createdAt || ""

    # The original author of the message: Immutable.
    @author = data.author

    # Updated at: Mutable.
    @updatedAt = ko.observable data.updatedAt || ""

    # Message type: Immutable.
    @messageType = data.messageType || null

    # State: Mutable.
    @state = ko.observable data.state || null

    # The amount of comments: Mutable.
    # Comments are lazy-loaded, so this cannot be computed on-the-fly.
    @commentAmount = ko.observable data.commentAmount || 0

    # The actual text content of the message: Mutable.
    @message = ko.observable data.message || ""

    # The message ID: Immutable.
    @id = data.id || null

    # Computed properties
    # Is the message deleted: Mutable. (Can a message ever be undeleted?)
    @isDeleted = ko.observable data.isDeleted || false

    # Event list is an array of event structures as returned by the API.
    @eventList = ko.observableArray []

    # Holder for the new comment text
    @newComment = ko.observable ""

    # Holder for the new message text
    @newText = ko.observable ""

    # Flag: Is the editing dialog open?
    @isEditingOpen = ko.observable false

    # Flag: Is there a pending edit for the message?
    @isEditPending = ko.observable false

    # Flag: Is there a pending comment for the message?
    @isCommentPending = ko.observable false

    # Flag: Is the message history open?
    @isMessageOpen = ko.observable false


  # Return the next state of the message according to the workflow
  nextState: =>
    # A, B, C -> A, B, C, A, B, C, ...
    states = @messageType.workflow.states
    currentStateIndex = _.findIndex states, slug: @state().slug
    states[currentStateIndex + 1] or states[0]


  # Return whether or not the message state is cycleable, that is, if there's more than one state in the workflow.
  isCycleable: () =>
    @messageType.workflow.states.length > 1


  # Formats an event structure to a form with a human-readable text and presentation metadata
  formatEvent: (event, messageType) =>
    if event.type == "create"
      text = "Loi kohteen: " + @escapeHtml event.text

    else if event.type == "delete"
      text = "Poisti kohteen"

    else if event.type == "comment"
      text = @escapeHtml event.comment

    else if event.type == "edit"
      text = "Muokkasi kohdetta: " + @escapeHtml event.text

    else if event.type == "statechange"
      messageTypes = messageType.workflow.statesBySlug
      oldLabel = messageTypes[event.oldState]
      newLabel = messageTypes[event.newState]
      if oldLabel
        oldLabelHtml = '<span class="label ' + oldLabel.labelClass + '">' + @escapeHtml(oldLabel.name) + '</span>'
      else
        oldLabelHtml = 'tuntematon tila'
      if newLabel
        newLabelHtml = '<span class="label ' + newLabel.labelClass + '">' + @escapeHtml(newLabel.name) + '</span>'
      else
        newLabelHtml = 'tuntematon tila'
      text = 'Vaihtoi kohteen tilan: ' + oldLabelHtml + ' &rArr; ' + newLabelHtml

    else
      text = "?"

    {
      time: event.formattedTime
      html: text
      classes: "infokala-event-" + event.type
      author: event.author
    }


  # Does the message match the filter? Currently only slug filtering is supported.
  matchesFilter: (filter) =>
    if filter.slug
      @messageType.slug == filter.slug
    else
      true


  # Change the message state to the next possible one according to the workflow. No-op is !isCycleable.
  cycleMessageState: () =>
    return unless @isCycleable

    updateMessage(@id, {
      message: @message(),
      state: @nextState().slug,
      author: @app.author()
    }).then (updatedMessage) =>
      @updateWith updatedMessage
      if @isMessageOpen()
        @updateEvents()


  # Toggle the editing state of the message.
  toggleEdit: (message) =>
    if @isEditingOpen()
      return @isEditingOpen false
    @newText @message()
    @isEditingOpen true


  # Confirm and delete the message.
  deleteMessage: (message) =>
    if window.confirm("Haluatko varmasti poistaa viestin?")
      deleteMessage(message.id).then (data) =>
        @updateWith data


  # Toggle the message history/comments visibility.
  toggleOpen: (message) =>
    if @isMessageOpen()
      return @isMessageOpen false

    @updateEvents().then () => @isMessageOpen true


  # Fetch and update the message events and comments.
  updateEvents: () =>
    getMessageEvents(@id).then (events) =>
      formattedEvents = (@formatEvent(e, @messageType) for e in events)
      @eventList formattedEvents


  # Event handler for message edit submission.
  handleEdit: () =>
    @message @newText()
    @isEditPending true
    @isEditingOpen false
    updateMessage(
      @id,
      {state: @state().slug, message: @newText(), author: @app.author()}
    ).then (newMessage) =>
      @updateWith(newMessage)
      @isEditPending false


  # Event handler for new comment submission.
  handleComment: () =>
    @isCommentPending true
    postComment(
      @id,
      {"author": @app.author(), "comment": @newComment()}
    ).then (event) =>
      @newComment ""
      @isCommentPending false
      @eventList.unshift @formatEvent event, @messageType


  # Utility: Escape HTML.
  escapeHtml: (str) =>
    String(str).replace /[&<>"'\/]/g, (s) ->
      {
        "&": "&amp;"
        "<": "&lt;"
        ">": "&gt;"
        "/": '&#x2F;'
        '"': '&quot;'
        "'": '&#x27;'
      }[s]


  # Update the message with new data.
  updateWith: (data) =>
    @formattedTime data.formattedTime
    @updatedAt data.updatedAt
    @state data.state
    @commentAmount data.commentAmount
    @message data.message
    @isDeleted data.isDeleted