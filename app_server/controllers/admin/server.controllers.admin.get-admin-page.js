'use strict';

// Get admin page
var getAdminPage = function(req, res){
  res.render('server.views.admin.hbs', {
    userFirstName: req.user ? req.user.firstName : ''
  });
};

module.exports = getAdminPage;
