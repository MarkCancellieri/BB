'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');

// Get a list of posts
var getListOfPosts = function (req, res) {
  var query = {};
  if (req.query.boardID) query.boardID = req.query.boardID;

  Post
    .find(query)
    .populate('author', 'firstName lastName')
    .exec(function(err, posts) {
      res.status(200).json(posts);
    });
};

module.exports = getListOfPosts;
