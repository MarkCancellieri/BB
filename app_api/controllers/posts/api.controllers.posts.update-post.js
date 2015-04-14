'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');

// Update a post.
var updatePost = function (req, res) {
  res.status(200).json({"status" : "success"});
};

module.exports = updatePost;
