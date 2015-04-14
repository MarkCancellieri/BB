'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');

// Create a post.
var createPost = function (req, res) {
  var newPost = new Post({
    subject: req.body.subject,
    author: req.body.author,
    body: req.body.body,
    boardID: req.body.boardID
  });
  newPost.save(function(err, post) {
    if (!err) {
      console.log('Saved post: ' + post._id);
      res.status(201).json(post);
    } else {
      console.dir(err);
      res.status(500).json(err);
    }
  });
};

module.exports = createPost;
