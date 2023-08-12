// Create web server
var express = require('express');
var router = express.Router();
// Load database
var db = require('../db');

// Load comment model
var Comment = require('../models/comment');

// Create comment
router.post('/create', function(req, res, next) {
  var comment = new Comment({
    content: req.body.content,