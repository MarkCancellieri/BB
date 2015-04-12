'use strict';

// Get admin page
var getAdminPage = function(req, res){
  res.render('server.views.admin.hbs', {
    userFullName: req.user ? req.user.fullName : ''
  });
};

module.exports = {
  getAdminPage: getAdminPage
};
