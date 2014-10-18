Promise = require 'bluebird'
ko = require 'knockout'
mapping = require 'knockout-mapping'

{getMessages, getConfig} = require './message_service.coffee'

module.exports = class MainViewModel
  constructor: ->
    @messages = ko.observableArray []
    @user = mapping.fromJS
      displayName: ""
      username: ""

    Promise.all([getConfig(), getMessages()]).spread (config, messages) =>
      @messageTypes = config.messageTypes
      mapping.fromJS config.user, @user
      @newMessages messages

  newMessages: (newMessages) ->
    @messages.push message for message in newMessages
