'use strict';

// Get a list of boards
var getListOfBoards = function(req, res){
  res.render('server.views.boards-list.hbs', {
    title: 'Totally Fake Website - Insanely Great List of Boards',
    pageHeader: {title: 'Fake Boards'},
    boardsList: [
      {boardTitle: 'Fake Sports Board', boardID: 1},
      {boardTitle: 'Fake Politics Board', boardID: 2},
      {boardTitle: 'Fake Economics Board', boardID: 3},
      {boardTitle: 'Fake JavaScript Board', boardID: 4},
      {boardTitle: 'Fake Pulp Fiction Board', boardID: 5},
      {boardTitle: 'Fake Gladiator Board', boardID: 6},
      {boardTitle: 'Fake Fight Club Board', boardID: 7}
    ],
    userFullName: req.user ? req.user.fullName : ''
  });
};

module.exports = getListOfBoards;
