window.jQuery = require 'jquery'
require 'bootstrap'

ko = require 'knockout'

MainViewModel = require './main_view_model.coffee'

ko.applyBindings (window.infokalaMainViewModel = new MainViewModel)
