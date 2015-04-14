'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Board             = mongoose.model('Board');

// Get a list of boards
var getListOfBoards = function (req, res) {
  Board
    .find({})
    .exec(function(err, boards) {
      if (err) {
        console.dir(err);
      }
      res.status(200).json(boards);
    });
};

module.exports = getListOfBoards;
