import * as ko from 'knockout';
import find from 'lodash/find';

import { getAllMessages, getMessagesSince, sendMessage } from './message_service';
import { enrichConfiguration, getDayChangeMessage } from './internal_messages';
import MessageViewModel from './message_view_model';
import { getDayStart } from './utils';
import { config } from './config_service';

enrichConfiguration(config);

const refreshMilliseconds = 5 * 1000;

export default class MainViewModel {
  constructor() {
    this.refresh = this.refresh.bind(this);
    this.addDayChangeMessages = this.addDayChangeMessages.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.updateFilterFromHash = this.updateFilterFromHash.bind(this);
    this.updateHashFromFilter = this.updateHashFromFilter.bind(this);
    this.updateFilterStates = this.updateFilterStates.bind(this);
    this.setFilterType = this.setFilterType.bind(this);
    this.setFilterState = this.setFilterState.bind(this);
    this.setFilterState = this.setFilterState.bind(this);
    this.shouldShowFilters = this.shouldShowFilters.bind(this);
    this.messageUpdated = this.messageUpdated.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
    this.shouldShowMessageType = this.shouldShowMessageType.bind(this);
    this.isLoading = ko.observable(true);

    this.config = config;
    this.messages = ko.observableArray([]);
    this.visibleMessages = ko.observableArray([]);

    // Exclude internal message types starting with an underscore
    // An underscore is not valid in a message type slug, so this should never hit legitimate message typess
    this.visibleMessageTypes = config.messageTypes.filter(c => !c.slug.startsWith('_'));

    // Generate stylesheet for message types
    const styleText = config.messageTypes
      .map(({ slug, color }) => `.infokala-msgtype-${slug} { border-left: 6px solid ${color} }`)
      .join('\n');

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styleText;
    document.body.appendChild(styleSheet);

    this.latestMessageTimestamp = null;
    this.user = ko.observable({
      displayName: '',
      username: '',
    });

    // New message author and message fields
    this.author = ko.observable(config.user.displayName);
    this.message = ko.observable('');

    // If the "All" filter is active, message type for a new message is selected via a dropdown field.
    // Otherwise it is the message type of the active filter.
    this.manualMessageType = ko.observable(config.defaultMessageType);
    this.effectiveMessageType = ko.pureComputed(() => {
      const activeFilter = this.activeFilter();
      if (activeFilter.type) {
        return activeFilter.type;
      }
      return this.manualMessageType();
    });

    this.logoutUrl = ko.observable('');

    // Using ko.pureComputed on @messages would be O(n) on every new or changed message – suicide
    this.messagesById = {};
    this.messages.subscribe(this.messageUpdated, null, 'arrayChange');
    this.visibleMessages.subscribe(
      (changes) => {
        changes.forEach((change) => {
          if (change.status !== 'added') {
            return;
          }
          const message = change.value;
          message.visibleIndex = change.index;
        });
      },
      null,
      'arrayChange'
    );

    this.messageTypeFilters = ko.observable(
      [
        {
          name: 'Kaikki',
          slug: null,
        },
      ].concat(config.messageTypes.filter(mt => !mt.internal))
    );

    // Special objects used as special filters
    this.filterAll = { name: 'Kaikki', slug: '_all', fn: () => true };
    this.filterActive = { name: 'Aktiiviset', slug: '_active', fn: m => m.state().active };
    this.messageStateSpecialFilters = ko.observable([this.filterAll, this.filterActive]);
    this.messageStateFilters = ko.observableArray([]);

    // activeFilter stores the type slug and state object we are matching against, possibly including some special cases
    this.activeFilter = ko.observable({ type: null, state: this.filterAll });
    this.activeFilter.subscribe(this.filterChanged);

    window.addEventListener('hashchange', () => this.updateFilterFromHash(window.location.hash));
    if (window.location.hash) {
      this.updateFilterFromHash(window.location.hash);
    }

    this.shouldShowNewMessageWarning = ko.pureComputed(() => {
      const filter = this.activeFilter();
      const messageType = config.messageTypesBySlug[filter.type];
      return messageType && messageType.workflow.states.indexOf(filter.state) > 0;
    });

    getAllMessages().then((messages) => {
      this.updateMessages(messages);
      this.isLoading(false);

      // Setup polling
      return window.setInterval(this.refresh, refreshMilliseconds);
    });
  }

  refresh() {
    if (this.latestMessageTimestamp) {
      // TODO: This could be grouped into a single request instead of one for every open message
      this.messages().filter(m => m.isMessageOpen()).forEach(m => m.updateEvents());
      return getMessagesSince(this.latestMessageTimestamp).then(this.updateMessages);
    }
    return getAllMessages().then(this.updateMessages);
  }

  addDayChangeMessages() {
    const newVisible = [];
    const oldVisible = this.visibleMessages();

    let last = null;
    oldVisible.forEach((msg) => {
      if (!msg.messageType.internal) {
        if (last === null || (last && getDayStart(last.createdAt).getTime() !== getDayStart(msg.createdAt).getTime())) {
          newVisible.push(getDayChangeMessage(msg.createdAt));
        }
        newVisible.push(msg);
        last = msg;
      }
    });

    // TODO: Immutable all the things
    return this.visibleMessages.splice(0, this.visibleMessages().length, ...newVisible);
  }

  updateMessages(updatedMessages, updateLatestMessageTimestamp = true) {
    let hasNewMessages = false;

    updatedMessages.forEach((messageData) => {
      const existingMessage = this.messagesById[messageData.id];

      if (existingMessage) {
        return existingMessage.updateWith(messageData);
      }

      const msg = new MessageViewModel(this, messageData);
      this.messages.push(msg);
      hasNewMessages = true;

      if (msg.matchesFilter(this.activeFilter())) {
        this.visibleMessages.push(msg);
      }

      if (updateLatestMessageTimestamp) {
        if (!this.latestMessageTimestamp || msg.updatedAt() > this.latestMessageTimestamp) {
          this.latestMessageTimestamp = msg.updatedAt();
        }
      }

      return window.scrollTo(0, document.body.scrollHeight);
    });

    if (hasNewMessages) {
      return this.addDayChangeMessages();
    }

    return this.messages;
  }

  updateFilterFromHash(hash) {
    const [type, state] = hash.substring(1).split('/', 2);

    // If there is a missing type, reset the filter
    if (!type) {
      return this.activeFilter({ type: null, state: this.filterAll });
    }

    // Only refresh the filter if it has changed
    const filter = this.activeFilter();
    const activeType = !filter.type ? '_all' : filter.type;
    if (type === activeType && state === filter.state.slug) {
      return null;
    }

    // Filter type
    let typeObj = null;
    filter.type = null;
    if (type !== '_all' && type in config.messageTypesBySlug) {
      typeObj = config.messageTypesBySlug[type];
      filter.type = type;
    }

    // Filter state
    filter.state = this.filterAll;
    if (state) {
      let findIn = [];
      // Special state filters are always applicable
      if (state.startsWith('_')) {
        findIn = this.messageStateSpecialFilters();
        // Non-special state filters are allowed when type is non-special
      } else if (filter.type) {
        const messageType = config.messageTypesBySlug[filter.type];
        if (messageType) {
          findIn = messageType.states;
        }
      }

      const foundState = find(findIn, s => s.slug === state);
      if (foundState) {
        filter.state = foundState;
      }
    }

    this.activeFilter(filter);
    if (typeObj) {
      return this.updateFilterStates(typeObj);
    }

    return null;
  }

  updateHashFromFilter() {
    const filter = this.activeFilter();
    const type = filter.type === null ? '_all' : filter.type;
    const state = filter.state.slug;
    let hash;
    if (type === state && state === '_all') {
      hash = '';
    } else if (state === '_all') {
      hash = `#${type}`;
    } else {
      hash = `#${type}/${state}`;
    }
    window.location.hash = hash;
    return hash;
  }

  updateFilterStates(messageType) {
    if (!messageType.slug || messageType.workflow.states.length < 2) {
      return this.messageStateFilters.removeAll();
    }

    return this.messageStateFilters.splice(0, this.messageStateFilters().length, ...messageType.workflow.states);
  }

  setFilterType(messageType) {
    this.activeFilter(Object.assign(this.activeFilter(), { type: messageType.slug }));
    const filter = this.activeFilter();
    filter.type = messageType.slug;
    this.activeFilter({ type: messageType.slug, state: this.filterAll });
    this.updateFilterStates(messageType);
    return this.updateHashFromFilter();
  }

  setFilterState(messageState) {
    this.activeFilter(Object.assign(this.activeFilter(), { state: messageState }));
    return this.updateHashFromFilter();
  }

  shouldShowFilters() {
    // Show filters if we're showing all items or messages of a type with more than one state
    return !this.activeFilter().type || config.messageTypesBySlug[this.activeFilter().type].workflow.states.length > 1;
  }

  messageUpdated(changes) {
    return changes.forEach((change) => {
      if (change.status !== 'added') {
        return;
      }

      const message = change.value;
      message.index = change.index;
      this.messagesById[message.id] = message;
    });
  }

  sendMessage() {
    if (this.message() === '') {
      return;
    }
    sendMessage({
      messageType: this.effectiveMessageType(),
      author: this.author(),
      message: this.message(),
    }).then((newMessage) => {
      // Clear the message field
      this.message('');
      return this.updateMessages([newMessage], false);
    });
  }

  filterChanged(newFilter) {
    this.visibleMessages.splice(
      0,
      this.visibleMessages().length,
      ...this.messages().filter(m => m.matchesFilter(newFilter))
    );
    this.addDayChangeMessages();
  }

  shouldShowMessageType() {
    return !this.activeFilter().type;
  }
}
