'use strict';

// Get a specific board
var getBoard = function(req, res){
  var boardID = req.params.boardID;
  res.render('server.views.posts.posts-list.hbs', {
    title: 'Totally Fake Website - Posts',
    pageHeader: {title: 'Fake Posts'},
    boardID: boardID,
    userFirstName: req.user ? req.user.firstName : ''
  });
};

module.exports = getBoard;
