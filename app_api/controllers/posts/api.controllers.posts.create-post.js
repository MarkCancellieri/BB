'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');
var utilities         = require('../../../lib/lib.utilities.js');
var sendJSONresponse  = utilities.sendJSONresponse;

// Create a post.
var createPost = function (req, res) {
  var newPost = new Post({
    postTitle: req.body.postTitle,
    postAuthor: req.body.postAuthor,
    postBody: req.body.postBody
  });
  newPost.save(function(err, post) {
    if (!err) {
      console.log('Saved post: ' + post._id);
    }
  });
};

module.exports = createPost;
