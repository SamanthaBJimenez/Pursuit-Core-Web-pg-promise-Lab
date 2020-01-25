var express = require('express');
var router = express.Router();

const { getAllPosts, getUsersPosts, createNewPost } = require("../queries/posts.js");

router.get('/all', getAllPosts);

router.get('/:user_id', getUsersPosts);

router.post('/register', createNewPost);

module.exports = router;
