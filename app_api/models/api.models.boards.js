'use strict';

// Module dependencies
var mongoose = require( 'mongoose' );

// Define board schema
var boardSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Board name cannot be blank.'
  },
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

// Note: Required by api.models.index.js
mongoose.model('Board', boardSchema);
