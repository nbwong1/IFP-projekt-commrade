// uses `/api/posts`

const router = require("express").Router();

const { Post, Expiration, User } = require("../../models");
const withAuth = require("../../utils/auth");

//get route for posts, gets all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get route for posts, gets based on one user
router.get("/:user_id", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.params.user_id,
    },
  }).then((postData) => {
    res.json(postData);
  });
});

// post route for posts
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      user_id: req.body.user_id,
      title: req.body.title,
      content: req.body.content,
      location: req.body.location,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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

//update routes for post
router.put("/:id", async (req, res) => {
  Post.update(
    {
      user_id: req.body.user_id,
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
    .catch((err) => res.status(500).json(err));
});
// delete based on Date of event

module.exports = router;
