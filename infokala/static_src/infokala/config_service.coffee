_ = require 'lodash'

exports.config = config = window.infokalaConfig

config.workflows.forEach (workflow) ->
  _.extend workflow,
    statesBySlug: _.indexBy workflow.states, 'slug'

config.workflowsBySlug = _.indexBy config.workflows, 'slug'

config.messageTypes.forEach (messageType) ->
  _.extend messageType,
    workflow: config.workflowsBySlug[messageType.workflow],
    internal: messageType.internal || false

config.messageTypesBySlug = _.indexBy config.messageTypes, 'slug'
