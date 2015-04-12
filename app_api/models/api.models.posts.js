'use strict';

// Module dependencies
var mongoose = require( 'mongoose' );

// Define post schema
var postSchema = new mongoose.Schema({
  postTitle: {
    type: String,
    trim: true,
    required: 'Title cannot be blank.'
  },
  postAuthor: {
    type: String,
    trim: true,
    required: 'Author cannot be blank.'
  },
  postTime: {type: Date, 'default': Date.now},
  postBody: {
    type: String,
    required: 'Post body cannot be blank.'
  },
  boardID: {type: mongoose.Schema.Types.ObjectId, ref: 'Board'}
});

// Note: Required by api.models.index.js
mongoose.model('Post', postSchema);
