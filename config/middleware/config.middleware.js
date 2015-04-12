'use strict';

module.exports = {
  bodyParser:     require('body-parser'),
  compress:       require('compression'),
  flash:          require('connect-flash'),
  logger:         require('morgan'),
  methodOverride: require('method-override'),
  session:        require('express-session'),
  _404:           require('./config.middleware.404.js'),
  errorHandler:   require('./config.middleware.error-handler.js')
};
