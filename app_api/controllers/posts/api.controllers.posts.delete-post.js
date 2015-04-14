'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');

// Delete a post.
var deletePost = function (req, res) {
  res.status(200).json({"status" : "success"});
};

module.exports = deletePost;
