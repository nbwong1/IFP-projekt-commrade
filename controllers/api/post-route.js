const router = require("express").Router();
const { Post, Expiration } = require("../../models");
const withAuth = require("../../utils/auth");

// post route for posts (maybe we should name this something else so there's no confusion, it might make it easier)
router.post("/", async (req, res) => {
  Post.create({
    title: req.body.title,
    user_id: req.body.user_id,
    content: req.body.content,
    location: req.body.location,
  }).then((newPost) => {
    res.json(newPost);
  }).catch ((err) => {
      res.json(err);
    });
});

// update route for posts
router.put("/:id", async (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
      location: req.body.location,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => res.json(err));
});

// delete routes for posts
router.delete("/:id", async (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPost) => {
      res.json(deletedPost);
    })
    .catch((err) => res.json(err));
});
// delete based on Date of event

module.exports = router;
