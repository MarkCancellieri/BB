'use strict';

// Define utility function to send JSON responses
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports = {
  sendJSONresponse: sendJSONresponse
};