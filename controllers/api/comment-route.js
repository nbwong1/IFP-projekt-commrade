const router = require("express").Router();

const { Utils } = require("sequelize");
const { Post, Comment, User } = require("../../models");
const withAuth = require('../../utils/auth');

// get route for comments, gets all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post comment route
router.post('/:post_id', async (req, res) => {
    try {
        const newComment = await Comment.create({
            user_id: req.body.user_id,
            post_id: req.body.post_id,
            commentary: req.body.commentary,

        });
    };
});


//update route for comments
router.put('/:id', async (req, res) => {
    Comment.update(
        {
            user_id: req.body.user_id,
            post_id: req.body.post_id,

            commentary: req.body.commentary,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
    .then((updatedComment) => {
        res.jsonO(updatedComment);
    })
    .catch((err) => res.json(err));
});

// delete comment route
router.delete('/:id', async (req, res) => {

    Comment.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedComment) => {
        res.json(deletedComment);
    })

    .catch((err) => res.status(500).json (err));

});

module.exports = router;