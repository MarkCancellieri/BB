'use strict';

// Load the correct configuration file according to the 'NODE_ENV' variable
module.exports = require('./env/config.' + process.env.NODE_ENV + '.js');
