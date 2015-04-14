'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../../config/config').apiOptions;

// Render list of posts
var renderListOfPosts = function(req, res, posts) {
  res.render('server.views.posts.posts-list.hbs', {
    title: 'Totally Fake Website - Awesome List of Posts',
    pageHeader: {title: 'Recent Posts'},
    posts: posts,
    userFullName: req.user ? req.user.fullName : ''
  });
};

// Get a list of posts
var getListOfPosts = function(req, res){
  var path = '/api/posts';
  var qs = {};
  if (req.params.boardID) qs.boardID = req.params.boardID;
  var requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
    qs : qs
  };
  request(requestOptions, function(err, response, body) {
    renderListOfPosts(req, res, body);
  });
};

module.exports = getListOfPosts;
