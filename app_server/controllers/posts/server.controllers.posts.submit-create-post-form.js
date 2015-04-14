'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../../config/config').apiOptions;

// Submit create post form
var createPost = function(req, res){
  var path, requestOptions, postData;
  path = '/api/posts/new';
  postData = {
    postTitle: 'Static post title for now',
    postAuthor: 'Joe Blow',
    postBody: req.body.body,
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postData
  };
  request(
    requestOptions,
    function(err, response, body) {
      renderListOfPosts(req, res, body);
    }
  );
};

module.exports = createPost;
