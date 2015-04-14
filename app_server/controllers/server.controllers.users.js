'use strict';

module.exports = {
  getSignUpForm:    require('./users/server.controllers.users.get-sign-up-form'),
  getSignInForm:    require('./users/server.controllers.users.get-sign-in-form'),
  submitSignUpForm: require('./users/server.controllers.users.submit-sign-up-form'),
  submitSignInForm: require('./users/server.controllers.users.submit-sign-in-form'),
  signOut:          require('./users/server.controllers.users.sign-out')
};
