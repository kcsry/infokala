import ko from 'knockout';
import findIndex from 'lodash/findIndex';
import linkify from 'linkifyjs/html';

import { getMessageEvents, postComment, updateMessage, deleteMessage } from './message_service';
import { escapeHtml, formatEvent } from './utils';

export default class MessageViewModel {
  constructor(app, data) {
    // {"formattedTime": "15:39:08",
    //  "createdAt": "2016-01-06T13:39:08.811603+00:00",
    //  "author": "Author",
    //  "updatedAt": "2016-01-06T13:39:08.811644+00:00",
    //  "messageType": "event",
    //  "deletedBy": null,
    //  "state": "recorded",
    //  "commentAmount": 0,
    //  "createdBy": "user",
    //  "updatedBy": null,
    //  "deletedAt": null,
    //  "message": "Lorem ipsum dolor sit amet",
    //  "id": 1,
    //  "isDeleted": false}

    this.getDisplayMessage = this.getDisplayMessage.bind(this);
    this.nextState = this.nextState.bind(this);
    this.isCycleable = this.isCycleable.bind(this);
    this.matchesFilter = this.matchesFilter.bind(this);
    this.cycleMessageState = this.cycleMessageState.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.updateWith = this.updateWith.bind(this);
    this.app = app;

    // Properties straight from the API
    // Formatted time: What is this?
    this.formattedTime = ko.observable(data.formattedTime || '');

    // Created at: The creation time of the message. Immutable.
    this.createdAt = data.createdAt || '';

    // The original author of the message: Immutable.
    this.author = data.author;

    // Updated at: Mutable.
    this.updatedAt = ko.observable(data.updatedAt || '');

    // Message type: Immutable.
    this.messageType = data.messageType || null;

    // State: Mutable.
    this.state = ko.observable(data.state || null);

    // The amount of comments: Mutable.
    // Comments are lazy-loaded, so this cannot be computed on-the-fly.
    this.commentAmount = ko.observable(data.commentAmount || 0);

    // The actual text content of the message: Mutable.
    this.message = ko.observable(data.message || '');

    // HTML version with URLs linkified in the message: Mutable, computed.
    this.displayMessage = ko.pureComputed(this.getDisplayMessage);

    // The message ID: Immutable.
    this.id = data.id || null;

    // Is editable: Immutable, should be used only for pseudo-events such as day changes
    this.isEditable = data.isEditable !== undefined ? data.isEditable : true;

    // Computed properties
    // Is the message deleted: Mutable. (Can a message ever be undeleted?)
    this.isDeleted = ko.observable(data.isDeleted || false);

    // Event list is an array of event structures as returned by the API.
    this.eventList = ko.observableArray([]);

    // Holder for the new comment text
    this.newComment = ko.observable('');

    // Holder for the new message text
    this.newText = ko.observable('');

    // Flag: Is the editing dialog open?
    this.isEditingOpen = ko.observable(false);

    // Flag: Is there a pending edit for the message?
    this.isEditPending = ko.observable(false);

    // Flag: Is there a pending comment for the message?
    this.isCommentPending = ko.observable(false);

    // Flag: Is the message history open?
    this.isMessageOpen = ko.observable(false);
  }

  // Get the display message with URLs linkified
  getDisplayMessage() {
    return linkify(escapeHtml(this.message()));
  }

  // Return the next state of the message according to the workflow
  nextState() {
    // A, B, C -> A, B, C, A, B, C, ...
    const { states } = this.messageType.workflow;
    const currentStateIndex = findIndex(states, { slug: this.state().slug });
    return states[currentStateIndex + 1] || states[0];
  }

  // Return whether or not the message state is cycleable, that is, if there's more than one state in the workflow.
  isCycleable() {
    return this.messageType.workflow.states.length > 1;
  }

  // Does the message match the filter? Currently only slug filtering is supported.
  matchesFilter(filter) {
    let typeMatches = true;
    if (filter.type) {
      // Internal events are always shown
      typeMatches = this.messageType.slug === filter.type || this.messageType.internal;
    }

    let stateMatches = true;
    if (filter.state && !this.messageType.internal) {
      if ('fn' in filter.state && typeof filter.state.fn === 'function') {
        stateMatches = filter.state.fn(this);
      } else {
        stateMatches = this.state().slug === filter.state.slug;
      }
    }

    return typeMatches && stateMatches;
  }

  // Change the message state to the next possible one according to the workflow. No-op is !isCycleable.
  cycleMessageState() {
    if (!this.isCycleable) {
      return;
    }

    updateMessage(this.id, {
      message: this.message(),
      state: this.nextState().slug,
      author: this.app.author(),
    }).then((updatedMessage) => {
      this.updateWith(updatedMessage);
      if (this.isMessageOpen()) {
        this.updateEvents();
      }
    });
  }

  // Toggle the editing state of the message.
  toggleEdit() {
    if (this.isEditingOpen()) {
      return this.isEditingOpen(false);
    }
    this.newText(this.message());
    return this.isEditingOpen(true);
  }

  // Confirm and delete the message.
  deleteMessage() {
    if (window.confirm('Haluatko varmasti poistaa viestin?')) {
      // eslint-disable-line no-alert
      deleteMessage(this.id).then((data) => {
        this.updateWith(data);
      });
    }
  }

  // Toggle the message history/comments visibility.
  toggleOpen(__, evt) {
    // Knockout causes some interesting event handling to happen, so kludge it a bit
    if (evt.target.tagName === 'A') {
      return true;
    }

    if (this.isMessageOpen()) {
      return this.isMessageOpen(false);
    }
    return this.updateEvents().then(() => this.isMessageOpen(true));
  }

  // Fetch and update the message events and comments.
  updateEvents() {
    return getMessageEvents(this.id).then((events) => {
      const formattedEvents = events.map(e => formatEvent(e, this.messageType));
      return this.eventList(formattedEvents);
    });
  }

  // Event handler for message edit submission.
  handleEdit() {
    this.message(this.newText());
    this.isEditPending(true);
    this.isEditingOpen(false);
    return updateMessage(this.id, {
      state: this.state().slug,
      message: this.newText(),
      author: this.app.author(),
    }).then((newMessage) => {
      this.updateWith(newMessage);
      return this.isEditPending(false);
    });
  }

  // Event handler for new comment submission.
  handleComment() {
    this.isCommentPending(true);
    return postComment(this.id, { author: this.app.author(), comment: this.newComment() }).then((event) => {
      this.newComment('');
      this.isCommentPending(false);
      return this.eventList.unshift(formatEvent(event, this.messageType));
    });
  }

  // Update the message with new data.
  updateWith(data) {
    this.formattedTime(data.formattedTime);
    this.updatedAt(data.updatedAt);
    this.state(data.state);
    this.commentAmount(data.commentAmount);
    this.message(data.message);
    return this.isDeleted(data.isDeleted);
  }
}
