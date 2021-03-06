'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
  userName: String,
  email: String,
  comments: String,
  active: Boolean
});

module.exports = mongoose.model('Feedback', FeedbackSchema);