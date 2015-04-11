'use strict';

// Module dependencies
var mongoose = require('mongoose');
var Board = mongoose.model('Board');

// Define utility function to send JSON responses
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// Create a new board.
var createBoard = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports = {
  createBoard: createBoard
};
