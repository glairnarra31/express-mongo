const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        Post.find((error, posts) => {
            res.json({
                status: 'success',
                data: posts,
            });
        });        
    } catch (error) {
        res.json({
            status: 'error',
            data: error,
        });
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const result = await post.save();
        res.json({
            status: 'success',
            data: result,
        });
    } catch (error) {
        res.json({
            status: 'error',
            data: error,
        });
    }
});

router.get('/:postId', async (req, res) => {
    try {
        Post.findById(req.params.postId, (error, post) => {
            res.json({
                status: 'success',
                data: post,
            });
        });        
    } catch (error) {
        res.json({
            status: 'error',
            data: error,
        });
    }
});

module.exports = router;
