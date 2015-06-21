_ = require 'lodash'

exports.config = config = window.infokalaConfig

config.workflows.forEach (workflow) ->
  _.extend workflow,
    statesBySlug: _.indexBy workflow.states, 'slug'

workflowsBySlug = _.indexBy config.workflows, 'slug'

config.messageTypes.forEach (messageType) ->
  _.extend messageType,
    workflow: workflowsBySlug[messageType.workflow]

config.messageTypesBySlug = _.indexBy config.messageTypes, 'slug'
