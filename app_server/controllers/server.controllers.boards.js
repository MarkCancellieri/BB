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

// Get the create new board form
var getCreateBoardForm = function(req, res){
  res.render('server.views.create-new-board.hbs', {

  });
};

// Create new board
var createBoard = function(req, res){
  res.render('server.views.generic.hbs', {

  });
};

module.exports = {
  getListOfBoards: getListOfBoards,
  getBoard: getBoard,
  getCreateBoardForm: getCreateBoardForm,
  createBoard: createBoard
};
