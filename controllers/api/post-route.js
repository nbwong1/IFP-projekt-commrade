// uses `/api/posts`

const router = require("express").Router();
const { Post, Expiration } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts `/posts` for a single user (this might be confusing if we use IDs based on the user, maybe moved `/api/users/posts?)
router.get("/:user_id/posts", async (req, res) => {
  Post.findAll({
    where: {
      user_id: req.params.user_id,
    },
  }).then((postData) => {
    res.json(postData);
  });
});

// post route for posts (maybe we should name this something else so there's no confusion, it might make it easier)
router.post("/", withAuth, async (req, res) => {
  Post.create({
    title: req.body.title,
    // how to pull in the user_id based on session
    user_id: req.session.user_id,
    content: req.body.content,
    location: req.body.location,
  })
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      res.status(500).json(err);
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
