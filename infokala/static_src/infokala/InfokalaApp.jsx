/* eslint-disable max-len, react/prefer-stateless-function, react/prop-types, no-alert, jsx-a11y/no-static-element-interactions */
import React from 'react';
import cx from 'classnames';

import loaderImage from './loader.svg';

const NavBar = ({ config, messageTypeFilters = [], activeFilter }) => (
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a href="href" className="navbar-brand">Infokala</a>
      </div>
      <div id="base-navbar-collapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          {messageTypeFilters.map(({ slug, name, href = '#' }) => (
            <li className={cx({ active: slug === activeFilter.type })} key={slug}>
              <a href={{ href }} onClick={() => alert(`setFilterType ${slug}`)}>{name}</a>
            </li>
          ))}
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href={config.logoutUrl}>
              Kirjaa <b>{config.user.displayName}</b> ulos</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const FilterRow = ({ shouldShowFilters = true, messageStateSpecialFilters = [], messageStateFilters = [], activeFilter }) => (
  <div className={cx({ hidden: !shouldShowFilters, container: true })}>
    <div className="infokala-filter-row">
      <div className="row"><strong className="col-md-1">Suodata</strong>
        <div className="col-md-11 btn-toolbar">
          <div className="btn-group btn-group-sm">
            {messageStateSpecialFilters.map(({ name }) => (
              <button
                key={name}
                onClick={() => alert('setFilterState')}
                className={cx('btn btn-default', { 'btn-primary': activeFilter.name === name })}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="btn-group btn-group-sm">
            {messageStateFilters.map(({ name }) => (
              <button
                key={name}
                onClick={() => alert('setFilterState')}
                className={cx('btn btn-default', { 'btn-primary': activeFilter.name === name })}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <img alt="Loading" src={loaderImage} />
      </div>
    </div>
  </div>
);

const SubmitMessage = ({ shouldShowNewMessageWarning = true, shouldShowMessageType = true, visibleMessageTypes = [] }) => (
  <div className="container">
    <form onSubmit={() => alert('sendMessage')} className="infokala-message-form">
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
          className={cx('infokala-message-col col-sm-9', {
            'col-md-7': shouldShowMessageType,
            'col-md-9': !shouldShowMessageType,
            'infokala-message-col-middle': shouldShowMessageType,
          })}
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
          className={cx('col-md-2 col-sm-6 col-xs-9 infokala-message-type-col', { hidden: !shouldShowMessageType })}
        >
          <select data-bind="value: manualMessageType" className="form-control">
            {visibleMessageTypes.map(mt => <option value={mt.slug}>{mt.name}</option>)}
          </select>
        </div>
        <div className="col-md-1 col-sm-6 col-xs-3">
          <input type="submit" value="Luo" className="btn btn-primary" />
        </div>
      </div>
      <div className={cx('row infokala-new-message-warning', { hidden: !shouldShowNewMessageWarning })}>
        <div className="col-md-1" />
        <div className="col-md-11 text-muted">
          Huomaathan, että uusi viestisi ei näy nykyisillä suodatinasetuksilla.
        </div>
      </div>
    </form>
  </div>
);

const MessageHistory = ({ $parent, eventList, isCommentPending, isMessageOpen }) => {
  if (!isMessageOpen) return null;
  return (
    <div className="infokala-message-history">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-11 h5 infokala-history-header">Kommentoi</div>
      </div>
      <div className="row infokala-comment-form">
        <div className="col-md-1" />
        <div
          className="col-md-1 infokala-timestamp"
        >{(new Date()).toLocaleTimeString('fi-FI').replace(/\./g, ':')}</div>
        <div className="col-md-1">{$parent.author}:</div>
        <form
          onSubmit={() => alert('handleComment')}
          disabled={isCommentPending}
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
      <div className="infokala-message-event-container">
        {eventList.map(({ time, author, classes, id, html }) => (
          <div className="row infokala-message-event" key={id}>
            <div className="col-md-1" />
            <div className="col-md-1 infokala-timestamp">{time}</div>
            <div className="col-md-1">{author}:</div>
            <div className={cx('col-md-9', classes)}>{html}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MessageRow = ({ message, nextState, isCycleable, isDeleted, isEditable, isMessageOpen, shouldShowMessageType, isEditPending, isEditingOpen, displayMessage }) => {
  const { id, messageType, state, author, commentAmount, formattedTime } = message;
  return (
    <div
      id={`infokala-message-${id}`}
      className={cx(
        `infokala-message infokala-msgtype-${messageType.slug}`,
        {
          'infokala-message-cycleable': isCycleable,
          'infokala-message-deleted': isDeleted,
          'infokala-open': isMessageOpen,
        }
      )}
    >
      <div className="row infokala-action-row">
        <div className="col-md-12 text-muted">
          <div className={cx('pull-right', { hidden: !isEditable })}>
            <span
              onClick={() => alert('cycleMessageState')}
              className={cx('infokala-state-switcher', { hidden: !isCycleable })}
            >
              <span className={`label ${state.labelClass}`}>{state.name}</span>
              <span className="infokala-next-state">
                <span className="text-muted">&thinsp;&rArr;&thinsp;</span>
                <span className={`label ${nextState.labelClass}`}>{nextState.name}</span>
              </span>
            </span>
            &emsp;
            <span className={cx('label label-default', { hidden: !shouldShowMessageType })}>{ messageType.name }</span>
            &emsp;
            <span
              onClick={() => alert('toggleOpen')}
              className={cx('infokala-comments-button', { hidden: commentAmount === 0 })}
            >
              <span className="btn btn-xs btn-info">&#x1f4ac;{commentAmount}</span>
              &emsp;
            </span>
            <span
              onClick={() => alert('toggleEdit')}
              className="btn btn-xs btn-primary infokala-edit-message-button"
            >&#x270e;</span>
            &emsp;
            <span
              onClick={() => alert('deleteMessage')}
              className="btn btn-xs btn-danger infokala-delete-message-button"
            >&times;</span>
          </div>
          <div className="small">{formattedTime}</div>
        </div>
      </div>
      <div
        onClick={() => alert('toggleOpen')}
        className={cx('row infokala-message-text', { 'infokala-inactive': !state.active })}
      >
        <strong className="col-md-1 infokala-decoration">{author}</strong>
        <div
          className={cx('col-md-9', { 'infokala-edit-pending': isEditPending, hidden: isEditingOpen })}
        >{displayMessage}</div>
        <form onSubmit={() => alert('handleEdit')} className="col-md-9">
          <input
            type="text"
            onBlur={() => alert('handleEdit')}
            data-bind="textInput: newText"
            className={cx('form-control infokala-edit-field', { hidden: !isEditingOpen })}
          />
        </form>
      </div>
      <MessageHistory message={message} />
    </div>
  );
};

export default class InfokalaApp extends React.Component {
  render() {
    const config = { user: { displayName: 'uguu' } };
    const message = {
      id: 1,
      messageType: { slug: 'x', name: 'x' },
      state: { labelClass: 'x' },
    };
    const nextState = {labelClass: 'y'};
    return (
      <div>
        <NavBar config={config} />
        <div className="infokala-push-top">
          <FilterRow />
          <LoadingSpinner />
          <div className="container">
            {[message].map(message => <MessageRow message={message} key={message.id} nextState={nextState} />)}
          </div>
          <SubmitMessage />
        </div>
      </div>
    );
  }
}
