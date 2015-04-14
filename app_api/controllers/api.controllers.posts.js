'use strict';

module.exports = {
  getListOfPosts: require('./posts/api.controllers.posts.get-list-of-posts'),
  createPost: require('./posts/api.controllers.posts.create-post'),
  getPost: require('./posts/api.controllers.posts.get-post'),
  updatePost: require('./posts/api.controllers.posts.update-post'),
  deletePost: require('./posts/api.controllers.posts.delete-post')
};
