'use strict';

// Get a specific board
var getBoard = function(req, res){
  var boardID = req.params.boardID;
  res.render('server.views.posts-list.hbs', {
    title: 'Totally Fake Website - Posts',
    pageHeader: {title: 'Fake Posts'},
    boardID: boardID,
    userFullName: req.user ? req.user.fullName : ''
  });
};

module.exports = getBoard;
