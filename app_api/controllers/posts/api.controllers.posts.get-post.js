'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Post              = mongoose.model('Post');
var utilities         = require('../../../lib/lib.utilities.js');
var sendJSONresponse  = utilities.sendJSONresponse;

// Get a post.
var getPost = function (req, res) {
  if (req.params && req.params.postid) {
    Post
      .find({postID: req.params.postid})
      .exec(function(err, post) {
        if (!post) {
          sendJSONresponse(res, 404, {'message': 'postid not found.'});
          return;
        } else if (err) {
          sendJSONresponse(res, 404, err);
          return;
        }
        sendJSONresponse(res, 200, post);
      });
  } else {
    sendJSONresponse(res, 404, {'message': 'No postid in request.'});
  }
};

module.exports = getPost;
