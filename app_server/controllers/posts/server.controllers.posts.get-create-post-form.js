'use strict';

// Get create post form
var getCreatePostForm = function(req, res){
  res.render('server.views.posts.create-post-form.hbs', {
    title: 'Totally Fake Website - Home',
    pageHeader: {
      title: 'Totally Fake Website',
      subtitle: 'The World\'s Fakest Website Ever'
    },
    userFullName: req.user ? req.user.fullName : ''
  });
};

module.exports = getCreatePostForm;
