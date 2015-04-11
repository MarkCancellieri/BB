'use strict';

// Module dependencies
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

// Define utility function to send JSON responses
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// Get a list of posts.
var getListOfPosts = function (req, res) {
  Post
    .find({})
    .exec(function(err, posts) {
      sendJSONresponse(res, 200, posts);
    });
};

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

// Update a post.
var updatePost = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

// Delete a post.
var deletePost = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports = {
  getListOfPosts: getListOfPosts,
  createPost: createPost,
  getPost: getPost,
  updatePost: updatePost,
  deletePost: deletePost
};
