'use strict';

// Module dependencies
var express           = require('express');
var router            = express.Router();
var homeController    = require('../controllers/server.controllers.home.js');
var adminController   = require('../controllers/server.controllers.admin.js');
var boardsController  = require('../controllers/server.controllers.boards.js');
var postsController   = require('../controllers/server.controllers.posts.js');
var usersController   = require('../controllers/server.controllers.users.js');

// Home page
router.get('/', homeController.getHomePage);

// Admin routes
router.get('/admin', adminController.getAdminPage);

// Board routes
router.get('/boards', boardsController.getListOfBoards);
router.get('/boards/create', boardsController.getCreateBoardForm);
router.post('/boards/create', boardsController.submitCreateBoardForm);
router.get('/boards/:boardID', postsController.getListOfPosts);
router.get('/boards/:boardID/:boardName', postsController.getListOfPosts);
router.get('/boards/:boardID/:boardName/newpost', postsController.getCreatePostForm);
router.post('/boards/:boardID/:boardName/newpost', postsController.submitCreatePostForm);
router.get('/boards/:boardID/:boardName/:postID', postsController.getPost);

// Post routes
router.get('/posts', postsController.getListOfPosts);
router.get('/posts/:postID', postsController.getPost);

// User routes
router.get('/users/signup', usersController.getSignUpForm);
router.post('/users/signup', usersController.submitSignUpForm);
router.get('/users/signin', usersController.getSignInForm);
router.post('/users/signin', usersController.submitSignInForm);
router.get('/users/signout', usersController.signOut);

module.exports = router;
