'use strict';

// Get admin page
var getAdminPage = function(req, res){
  res.render('server.views.admin.hbs', {

  });
};

module.exports = {
  getAdminPage: getAdminPage
};
