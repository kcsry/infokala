import keyBy from 'lodash/keyBy';

export const config = window.infokalaConfig; // eslint-disable-line import/prefer-default-export

config.workflows.forEach(workflow => Object.assign(workflow, { statesBySlug: keyBy(workflow.states, 'slug') }));

config.workflowsBySlug = keyBy(config.workflows, 'slug');

config.messageTypes.forEach((messageType) => {
  Object.assign(messageType, {
    workflow: config.workflowsBySlug[messageType.workflow],
    internal: messageType.internal || false,
  });
});

config.messageTypesBySlug = keyBy(config.messageTypes, 'slug');
