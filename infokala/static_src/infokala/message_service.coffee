$ = require 'jquery'
Promise = require 'bluebird'

apiUrl = "/api/v1/events/test"

exports.getConfig = -> Promise.resolve $.getJSON "#{apiUrl}/config"
exports.getMessages = -> Promise.resolve $.getJSON "#{apiUrl}/messages"
