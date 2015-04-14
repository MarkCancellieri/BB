'use strict';

module.exports = {
  getListOfPosts:       require('./posts/server.controllers.posts.get-list-of-posts'),
  getCreatePostForm:    require('./posts/server.controllers.posts.get-create-post-form'),
  submitCreatePostForm: require('./posts/server.controllers.posts.submit-create-post-form')
};
