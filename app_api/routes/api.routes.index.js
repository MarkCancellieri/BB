'use strict';

// Module dependencies
var express           = require('express');
var router            = express.Router();
var boardsController  = require('../controllers/api.controllers.boards.js');
var postsController   = require('../controllers/api.controllers.posts.js');

// Boards API routes
router.post('/api/boards', boardsController.createBoard);

// Posts API routes
router.get('/api/posts', postsController.getListOfPosts);
router.post('/api/posts', postsController.createPost);
router.get('/api/posts/:postid', postsController.getPost);
router.put('/api/posts/:postid', postsController.updatePost);
router.delete('/api/posts/:postid', postsController.deletePost);

module.exports = router;
