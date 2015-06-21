_ = require 'lodash'
Promise = require 'bluebird'


exports.getConfig = ->
  config = window.infokalaConfig

  config.workflows.forEach (workflow) ->
      _.extend workflow,
        statesBySlug: _.indexBy workflow.states, 'slug'

  workflowsBySlug = _.indexBy config.workflows, 'slug'

  # unpack denormalized message type workflow
  config.messageTypes.forEach (messageType) ->
    _.extend messageType,
      workflow: workflowsBySlug[messageType.workflow]

  Promise.resolve config
