'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');

// Get a list of posts
var getListOfPosts = function (req, res) {
  Post
    .find({})
    .exec(function(err, posts) {
      res.status(200).json(posts);
    });
};

module.exports = getListOfPosts;
