import { config } from './config_service';
import MessageViewModel from './message_view_model';
import { getDayStart } from './utils';

// Add the internal workflow and message type to the configuration, currently used for the day change pseudo-messages
/* eslint-disable no-param-reassign, no-shadow */
export function enrichConfiguration(config) {
  const internalWorkflow = {
    slug: '_internal',
    name: '_internal',
    initialState: '_internal',
    states: [
      {
        slug: '_internal',
        name: '_internal',
        active: true,
        labelClass: '',
      },
    ],
  };

  internalWorkflow.statesBySlug = { _internal: internalWorkflow.states[0] };
  config.workflows.push(internalWorkflow);
  config.workflowsBySlug._internal = internalWorkflow;

  const internalMessageType = {
    name: '_internal',
    slug: '_internal',
    workflow: internalWorkflow,
    internal: true,
    color: 'silver',
  };

  config.messageTypes.push(internalMessageType);
  config.messageTypesBySlug._internal = internalMessageType;
}
/* eslint-enable no-param-reassign, no-shadow, no-underscore-dangle */

// Generate a day change pseudo-message for the day of the given timestamp
export function getDayChangeMessage(timestamp) {
  const eventTime = getDayStart(new Date(timestamp));
  return new MessageViewModel(this, {
    formattedTime: '00:00:00',
    createdAt: eventTime.toISOString(),
    author: 'Infokala',
    message: `Päivämäärä: ${eventTime.toLocaleDateString()}`,
    messageType: config.messageTypesBySlug._internal,
    state: config.workflowsBySlug._internal.statesBySlug._internal,
    isEditable: false,
  });
}
