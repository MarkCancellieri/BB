'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../../config/config').apiOptions;

// Render list of posts
var renderListOfPosts = function(req, res, responseBody) {
  res.render('server.views.posts-list.hbs', {
    title: 'Totally Fake Website - Awesome List of Posts',
    pageHeader: {title: 'Recent Posts'},
    postsList: responseBody,
    userFullName: req.user ? req.user.fullName : ''
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

module.exports = getListOfPosts;
