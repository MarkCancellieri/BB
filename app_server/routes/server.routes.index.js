'use strict';

// Module dependencies
var express           = require('express');
var passport          = require('passport');
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

// Boards routes
router.get('/boards', boardsController.getListOfBoards);
router.get('/boards/create', boardsController.getCreateBoardForm);
router.post('/boards/create', boardsController.createBoard);
router.get('/boards/:boardID', boardsController.getBoard);

// Posts routes
router.get('/posts', postsController.getListOfPosts);
router.get('/posts/new', postsController.getCreatePostForm);
router.post('/posts/new', postsController.submitCreatePostForm);

// Users routes
router.get('/users/signup', usersController.getSignUpForm);
router.post('/users/signup', usersController.signup);
router.get('/users/signin', usersController.getSignInForm);
router.post('/users/signin', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/signin',
  failureFlash: true
}));
router.get('/users/signout', usersController.signout);

module.exports = router;
