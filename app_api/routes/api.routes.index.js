'use strict';

// Module dependencies
var express           = require('express');
var router            = express.Router();
var boardsController  = require('../controllers/api.controllers.boards');
var postsController   = require('../controllers/api.controllers.posts');
var usersController   = require('../controllers/api.controllers.users');

// Board API routes
router.get('/api/boards', boardsController.getListOfBoards);
router.post('/api/boards', boardsController.createBoard);
router.get('/api/boards/:boardID', postsController.getListOfPosts);

// Post API routes
router.get('/api/posts', postsController.getListOfPosts);
router.post('/api/posts', postsController.createPost);
router.get('/api/posts/:postid', postsController.getPost);
router.put('/api/posts/:postid', postsController.updatePost);
router.delete('/api/posts/:postid', postsController.deletePost);

// User API routes
router.post('/api/users', usersController.createUser);
router.post('/api/users/signin', usersController.signIn);

module.exports = router;
