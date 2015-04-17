'use strict';

// Get home page
var getHomePage = function(req, res){
  console.dir(req.user);
  res.render('server.views.generic.hbs', {
    title: 'Totally Fake Website - Home',
    pageHeader: {
      title: 'Totally Fake Website',
      subtitle: 'The World\'s Fakest Website Ever'
    },
    userFirstName: req.user ? req.user.firstName : ''
  });
};

module.exports = {
  getHomePage:  getHomePage
};
