const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({})
    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            commentary: req.body.commentary,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    };
});

router.put('/:id', withAuth, (req, res) => {
    Comment.update(
        {
            commentary: req.body.commentary,
        },
        {
            where: {
                id: req.params.id,
            }
        }
    )
    .then(commentData => {
        if(!commentData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(commentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedComment) => {
        res.json(deletedComment);
    })
    .catch((err) => res.json(err));
});

module.exports = router;