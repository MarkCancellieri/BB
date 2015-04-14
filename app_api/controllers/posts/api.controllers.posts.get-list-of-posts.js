'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');
var utilities         = require('../../../lib/lib.utilities.js');
var sendJSONresponse  = utilities.sendJSONresponse;

// Get a list of posts.
var getListOfPosts = function (req, res) {
  Post
    .find({})
    .exec(function(err, posts) {
      sendJSONresponse(res, 200, posts);
    });
};

module.exports = getListOfPosts;
