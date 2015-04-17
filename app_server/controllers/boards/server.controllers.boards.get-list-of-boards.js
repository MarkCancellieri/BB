'use strict';

// Module dependencies
var request     = require('request');
var apiOptions  = require('../../../config/config').apiOptions;

// Get a list of boards
var getListOfBoards = function(req, res){
  var path = '/api/boards';
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };
  request(requestOptions, function (err, response, boards) {
    if (err) {
      console.dir(err);
    } else {
      console.dir(boards);

      res.render('server.views.boards.boards-list.hbs', {
        title: 'Totally Fake Website - Insanely Great List of Boards',
        pageHeader: {title: 'Fake Boards'},
        boards: boards,
        userFirstName: req.user ? req.user.firstName : ''
      });
    }
  });
};

module.exports = getListOfBoards;
