'use strict';

// Get home page
var getHomePage = function(req, res){
  res.render('server.views.generic.hbs', {
    title: 'Totally Fake Website - Home',
    pageHeader: {
      title: 'Totally Fake Website',
      subtitle: 'The World\'s Fakest Website Ever'
    }
  });
};

// Export main controller methods
module.exports = {
  getHomePage: getHomePage
};
