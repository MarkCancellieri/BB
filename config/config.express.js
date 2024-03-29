'use strict';

// Module dependencies
var express     = require('express');
var mongoose    = require('mongoose');
var passport    = require('passport');
var config      = require('./config');
var middleware  = require('./middleware/config.middleware');
var MongoStore  = require('connect-mongo')(middleware.session);

// Define the Express configuration function
function configureExpressApp() {
  // Create a new Express application instance
  var app = express();

  // Remove 'X-Powered-By' header
  app.set('x-powered-by', false);

  // Set the application view engine and 'views' folder
  require('./config.template-engine')(app);

  // Configure middleware
  if (process.env.NODE_ENV === 'development') app.use(middleware.logger('dev'));
  if (process.env.NODE_ENV === 'production') app.use(middleware.compress());
  app.use(express.static('./app_client'));
  app.use(middleware.serveFavicon('./app_client/favicon.ico'));
  app.use(middleware.bodyParser.json());
  app.use(middleware.bodyParser.urlencoded({extended: true}));
  app.use(middleware.methodOverride());
  app.use(middleware.session({
    saveUninitialized: true,
    resave: true,                 // TODO: false unless necessary for session store?
    secret: config.sessionSecret,
    store: new MongoStore({mongooseConnection: mongoose.connection})
  }));
  // app.use(middleware.csurf()) TODO: figure out how to use this!
  app.use(middleware.flash());

  // Initialize Passport middleware for authentication
  app.use(passport.initialize());
  app.use(passport.session());

  // Load the routing files
  app.use('/', require('../app_server/routes/server.routes.index.js'));
  app.use('/', require('../app_api/routes/api.routes.index.js'));

  // 404 handler
  app.use(middleware._404);

  // error handler
  app.use(middleware.errorHandler);

  // Return the Express app instance
  return app;
}

module.exports = configureExpressApp;
