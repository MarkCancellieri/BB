'use strict';

// Module dependencies
var request     = require('request');
var apiOptions  = require('../../../config/config').apiOptions;

// Create new board
var submitCreateBoardForm = function(req, res){
  var path = '/api/boards';
  var newBoard = {
    name: req.body.name
  };
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'POST',
    json: newBoard
  };
  request(requestOptions, function (err, response, board) {
    if (err) {
      console.dir(err);
    } else {
      console.dir(board);

      // Redirect the user back to the main application page
      return res.redirect('/');
    }
  });
};

module.exports = submitCreateBoardForm;
