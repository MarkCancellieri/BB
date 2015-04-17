'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../../config/config').apiOptions;

// Submit create post form
var createPost = function(req, res){
  var path, requestOptions, postData;
  path = '/api/posts';
  postData = {
    subject: req.body.subject,
    author: req.body.author,
    body: req.body.body,
    boardID: req.body.boardID
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postData
  };
  request(
    requestOptions,
    function(err, response, body) {
      res.redirect('/boards/' + req.params.boardID + '/' + req.params.boardName);
    }
  );
};

module.exports = createPost;
