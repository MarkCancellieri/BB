'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../config/config');

// Render list of posts
var renderListOfPosts = function(req, res, responseBody) {
  res.render('server.views.posts-list.hbs', {
    title: 'Totally Fake Website - Awesome List of Posts',
    pageHeader: {title: 'Recent Posts'},
    postsList: responseBody
  });
};

// Get a list of posts
var getListOfPosts = function(req, res){
  var path, requestOptions;
  path = '/api/posts';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
    qs : {
    }
  };
  request(
    requestOptions,
    function(err, response, body) {
      renderListOfPosts(req, res, body);
    }
  );
};

// Get create post form
var getCreatePostForm = function(req, res){
  res.render('server.views.create-post-form.hbs', {
    title: 'Totally Fake Website - Home',
    pageHeader: {
      title: 'Totally Fake Website',
      subtitle: 'The World\'s Fakest Website Ever'
    }
  });
};

// Submit create post form
var submitCreatePostForm = function(req, res){
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

module.exports = {
  getListOfPosts: getListOfPosts,
  getCreatePostForm: getCreatePostForm,
  submitCreatePostForm: submitCreatePostForm
};
