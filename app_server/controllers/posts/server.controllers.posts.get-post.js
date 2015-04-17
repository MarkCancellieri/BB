'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../../config/config').apiOptions;

// Render post
var renderPost = function(req, res, post) {
  res.render('server.views.posts.display-post.hbs', {
    title: 'Totally Fake Website - Awesome Post',
    pageHeader: {title: 'Recent Posts'},
    post: post,
    boardID: req.params.boardID,
    boardName: req.params.boardName,
    userFirstName: req.user ? req.user.firstName : ''
  });
};

// Get a post
var getPost = function(req, res){
  var path = '/api/posts/' + req.params.postID;
  var qs = {};
  var requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
    qs : qs
  };
  request(requestOptions, function(err, response, body) {
    renderPost(req, res, body);
  });
};

module.exports = getPost;
