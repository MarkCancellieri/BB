'use strict';

module.exports = {
  bodyParser:     require('body-parser'),
  compress:       require('compression'),
  logger:         require('morgan'),
  methodOverride: require('method-override'),
  session:        require('express-session'),
  _404:            require('./middleware.404'),
  errorHandler:   require('./middleware.error-handler.js')
};
