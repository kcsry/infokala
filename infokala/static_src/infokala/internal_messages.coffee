{config} = require './config_service.coffee'
MessageViewModel = require './message_view_model.coffee'
{getDayStart} = require './utils.coffee'


# Add the internal workflow and message type to the configuration, currently used for the day change pseudo-messages
exports.enrichConfiguration = (config) =>
  internalWorkflow = {
    slug: '_internal',
    name: '_internal',
    initialState: '_internal',
    states: [{
      slug: '_internal',
      name: '_internal',
      active: true,
      labelClass: ''
    }]
  }

  internalWorkflow.statesBySlug = {'_internal': internalWorkflow.states[0]}
  config.workflows.push internalWorkflow
  config.workflowsBySlug['_internal'] = internalWorkflow

  internalMessageType = {
    name: '_internal',
    slug: '_internal',
    workflow: internalWorkflow,
    internal: true,
    color: 'silver',
  }

  config.messageTypes.push internalMessageType
  config.messageTypesBySlug['_internal'] = internalMessageType


# Generate a day change pseudo-message for the day of the given timestamp
exports.getDayChangeMessage = (timestamp) =>
    eventTime = getDayStart new Date timestamp
    new MessageViewModel this, {
      formattedTime: "00:00:00",
      createdAt: eventTime.toISOString(),
      author: 'Infokala',
      message: "Päivämäärä: " + eventTime.toLocaleDateString(),
      messageType: config.messageTypesBySlug['_internal'],
      state: config.workflowsBySlug['_internal'].statesBySlug['_internal'],
      isEditable: false
    }