'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Board             = mongoose.model('Board');
var utilities         = require('../../../lib/lib.utilities.js');
var sendJSONresponse  = utilities.sendJSONresponse;

// Create a new board.
var createBoard = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports = createBoard;
