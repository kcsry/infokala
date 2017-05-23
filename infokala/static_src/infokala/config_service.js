import _ from 'lodash';

export let config = window.infokalaConfig;

config.workflows.forEach(workflow =>
  _.extend(workflow,
    {statesBySlug: _.keyBy(workflow.states, 'slug')})
);

config.workflowsBySlug = _.keyBy(config.workflows, 'slug');

config.messageTypes.forEach((messageType) => {
  _.extend(messageType, {
    workflow: config.workflowsBySlug[messageType.workflow],
    internal: messageType.internal || false
  });
});

config.messageTypesBySlug = _.keyBy(config.messageTypes, 'slug');
