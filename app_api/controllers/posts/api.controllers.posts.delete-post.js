'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');
var utilities         = require('../../../lib/lib.utilities.js');
var sendJSONresponse  = utilities.sendJSONresponse;

// Delete a post.
var deletePost = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports = deletePost;
