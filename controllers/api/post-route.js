const router = require("express").Router();

const { Post, Interest, User } = require("../../models");
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
      user_id: req.session.user_id,
      title: req.body.title,
      content: req.body.content,
      location: req.body.location,
    });
    res.json(newPost);
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
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.sendStatus(404);
    }
    if (post.user_id != req.session.user_id) {
      return res.sendStatus(403);
    }

    await post.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});
// delete based on Date of event

router.post("/:post_id/interested", async (req, res) => {
  try {
    await Interest.create({
      post_id: req.params.post_id,
      user_id: req.session.user_id,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
