'use strict';

// Set the 'production' environment configuration object
module.exports = {
  mongoURI: 'mongodb://localhost/bb-production',
  sessionSecret: 'productionSessionSecret',
  apiOptions: {
    server: 'http://example.com'
  },
  facebook: {
    clientID: 'Facebook Application ID',
    clientSecret: 'Facebook Application Secret',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'Twitter Application ID',
    clientSecret: 'Twitter Application Secret',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: 'Google Application ID',
    clientSecret: 'Google Application Secret',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};
