const router = require("express").Router();
const { Post, Expiration } = require("../../models");
const withAuth = require('../../utils/auth');

// post route for posts (maybe we should name this something else so there's no confusion, it might make it easier)
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch(err) {
        res.status(400).json(err);
    }
});

// delete routes for posts
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!'});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete based on Date of event

module.exports = router;
