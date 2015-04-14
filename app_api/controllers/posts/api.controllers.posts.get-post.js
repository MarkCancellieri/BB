'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');

// Get a post.
var getPost = function (req, res) {
  if (req.params && req.params.postid) {
    Post
      .find({postID: req.params.postid})
      .exec(function(err, post) {
        if (!post) {
          res.status(404).json({'message': 'postid not found.'});
          return;
        } else if (err) {
          res.status(404).json(err);
          return;
        }
        res.status(200).json(post);
      });
  } else {
    res.status(404).json({'message': 'No postid in request.'});
  }
};

module.exports = getPost;
