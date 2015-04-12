'use strict';

// Module dependencies
var mongoose = require( 'mongoose' );

// Define board schema
var boardSchema = new mongoose.Schema({
  boardName: {
    type: String,
    trim: true,
    required: 'boardName cannot be blank.'
  },
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

// Note: Required by api.models.index.js
mongoose.model('Board', boardSchema);
