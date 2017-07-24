/* eslint-disable max-len, react/prefer-stateless-function */
import React from 'react';
import loaderImage from './loader.svg';

const NavBar = () => (
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header"><a href="href" className="navbar-brand">Infokala</a></div>
      <div
        id="base-navbar-collapse"
        data-bind="visible: true"
        className="collapse navbar-collapse"
      >
        <ul data-bind="foreach: messageTypeFilters" className="nav navbar-nav">
          <li data-bind="css: { active: slug === $parent.activeFilter().type }">
            <a href="href" data-bind="text: name, click: $parent.setFilterType">...</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="href" data-bind="attr: { href: config.logoutUrl }">
              Kirjaa
              <b data-bind="text: config.user.displayName">...</b>
              ulos</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const FilterRow = () => (
  <div data-bind="visible: shouldShowFilters()" className="container">
    <div className="infokala-filter-row">
      <div className="row"><strong className="col-md-1">Suodata</strong>
        <div className="col-md-11 btn-toolbar">
          <div data-bind="foreach: messageStateSpecialFilters" className="btn-group btn-group-sm">
            <button
              data-bind="text: name, click: $parent.setFilterState, css: { &quot;btn-primary&quot;: $data === $parent.activeFilter().state }"
              className="btn btn-default"
            >...
            </button>
          </div>
          <div data-bind="foreach: messageStateFilters" className="btn-group btn-group-sm">
            <button
              data-bind="text: name, click: $parent.setFilterState, css: { &quot;btn-primary&quot;: $data === $parent.activeFilter().state }"
              className="btn btn-default"
            >...
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div data-bind="visible: isLoading" className="container">
    <div className="row">
      <div className="col-md-12">
        <img alt="Loading" src={loaderImage} />
      </div>
    </div>
  </div>
);

const SubmitMessage = () => (
  <div style={{ display: 'none' }} data-bind="visible: !isLoading()" className="container">
    <form data-bind="submit: sendMessage" className="infokala-message-form">
      <div className="row">
        <div className="col-md-2 col-sm-3 infokala-author-col">
          <input
            data-bind="value: author"
            type="text"
            autoComplete="nickname"
            name="author"
            className="form-control"
          />
        </div>
        <div
          data-bind="css: { &quot;col-md-7&quot;: shouldShowMessageType(), &quot;col-md-9&quot;: !shouldShowMessageType(), &quot;infokala-message-col-middle&quot;: shouldShowMessageType() }"
          className="infokala-message-col col-sm-9"
        >
          <input
            data-bind="value: message"
            placeholder="Viesti..."
            type="text"
            autoComplete="off"
            className="form-control"
          />
        </div>
        <div
          data-bind="visible: shouldShowMessageType()"
          className="col-md-2 col-sm-6 col-xs-9 infokala-message-type-col"
        >
          <select
            data-bind="options: visibleMessageTypes, optionsText: &quot;name&quot;, optionsValue: &quot;slug&quot;, value: manualMessageType"
            className="form-control"
          />
        </div>
        <div className="col-md-1 col-sm-6 col-xs-3">
          <input type="submit" value="Luo" className="btn btn-primary" />
        </div>
      </div>
      <div data-bind="visible: shouldShowNewMessageWarning" className="row infokala-new-message-warning">
        <div className="col-md-1" />
        <div className="col-md-11 text-muted">Huomaathan, että uusi viestisi ei näy nykyisillä
          suodatinasetuksilla.
        </div>
      </div>
    </form>
  </div>
);

const MessageHistory = () => (
  <div data-bind="visible: isMessageOpen" className="infokala-message-history">
    <div className="row">
      <div className="col-md-1" />
      <div className="col-md-11 h5 infokala-history-header">Kommentoi</div>
    </div>
    <div className="row infokala-comment-form">
      <div className="col-md-1" />
      <div
        data-bind="text: (new Date()).toLocaleTimeString(&quot;fi-FI&quot;).replace(/\./g, &quot;:&quot;)"
        className="col-md-1 infokala-timestamp"
      />
      <div data-bind="text: $parent.author() + &quot;:&quot;" className="col-md-1" />
      <form
        data-bind="submit: handleComment, disabled: isCommentPending, click: function(){}, clickBubble: false"
        className="col-md-8"
      >
        <input
          type="text"
          data-bind="textInput: newComment"
          className="form-control infokala-comment-field"
        />
      </form>
    </div>
    <div className="row">
      <div className="col-md-1" />
      <div className="col-md-11 h5 infokala-history-header">Historia</div>
    </div>
    <div data-bind="foreach: eventList" className="infokala-message-event-container">
      <div className="row infokala-message-event">
        <div className="col-md-1" />
        <div data-bind="text: time" className="col-md-1 infokala-timestamp" />
        <div data-bind="text: author + &quot;:&quot;" className="col-md-1" />
        <div data-bind="html: html, css: classes" className="col-md-9" />
      </div>
    </div>
  </div>
);

const MessageRow = message => (
  <div
    data-bind="attr: {id: &quot;infokala-message-&quot; + id, &quot;class&quot;: &quot;infokala-message infokala-msgtype-&quot; + messageType.slug}, css: {&quot;infokala-message-cycleable&quot;: isCycleable, &quot;infokala-message-deleted&quot;: isDeleted, &quot;infokala-open&quot;: isMessageOpen}"
  >
    <div className="row infokala-action-row">
      <div className="col-md-12 text-muted">
        <div data-bind="visible: isEditable" className="pull-right"><span
          data-bind="visible: isCycleable(), click: cycleMessageState"
          className="infokala-state-switcher"
        >
          <span data-bind="text: state().name, css: state().labelClass" className="label" />
          <span
            data-bind="with: nextState()"
            className="infokala-next-state"
          >
            <span className="text-muted">&thinsp;&rArr;&thinsp;</span>
            <span data-bind="text: name, css: labelClass" className="label" /></span></span>&emsp;
          <span
            data-bind="visible: $parent.shouldShowMessageType(), text: messageType.name"
            className="label label-default"
          />&emsp;<span
            data-bind="visible: commentAmount() &gt; 0, click: toggleOpen"
            className="infokala-comments-button"
          ><span
            data-bind="html: &quot;&amp;#x1f4ac; &quot; + commentAmount()"
            className="btn btn-xs btn-info"
          />&emsp;</span><span
            data-bind="click: toggleEdit, clickBubble: false"
            className="btn btn-xs btn-primary infokala-edit-message-button"
          >&#x270e;</span>&emsp;<span
            data-bind="click: deleteMessage, clickBubble: false"
            className="btn btn-xs btn-danger infokala-delete-message-button"
          >&times;</span></div>
        <div data-bind="text: formattedTime" className="small" />
      </div>
    </div>
    <div
      data-bind="css: {&quot;infokala-inactive&quot;: !state().active}, click: messageType.internal ? null : toggleOpen"
      className="row infokala-message-text"
    >
      <strong data-bind="text: author" className="col-md-1 infokala-decoration" />
      <div
        data-bind="html: displayMessage, visible: !isEditingOpen(), css: {&quot;infokala-edit-pending&quot;: isEditPending}"
        className="col-md-9"
      />
      <form data-bind="submit: handleEdit" className="col-md-9">
        <input
          type="text"
          data-bind="textInput: newText, visible: isEditingOpen, click: function(){}, clickBubble: false, event: {blur: handleEdit}"
          className="form-control infokala-edit-field"
        />
      </form>
    </div>
    <MessageHistory message={message} />

  </div>

);

export default class InfokalaApp extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="infokala-push-top">
          <FilterRow />
          <LoadingSpinner />
          <div
            data-bind="visible: !isLoading()"
            className="container"
          >
            {[{ id: 1 }].map(message => <MessageRow message={message} key={message.id} />)}
          </div>
          <SubmitMessage />
        </div>
      </div>
    );
  }

}
