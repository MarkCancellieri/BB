'use strict';

module.exports = {
  bodyParser:     require('body-parser'),
  compress:       require('compression'),
  csurf:          require('csurf'),
  flash:          require('connect-flash'),
  logger:         require('morgan'),
  methodOverride: require('method-override'),
  serveFavicon:   require('serve-favicon'),
  session:        require('express-session'),
  requiresLogin:  require('./config.middleware.users').requiresLogin,
  _404:           require('./config.middleware.404'),
  errorHandler:   require('./config.middleware.error-handler')
};
