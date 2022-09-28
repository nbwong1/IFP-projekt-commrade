const router = require("express").Router();

const { Utils } = require("sequelize");
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get route for comments, gets all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post comment route
router.post("/:post_id", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      user_id: req.session.user_id,
      post_id: req.params.post_id,
      commentary: req.body.commentary,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update route for comments
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.sendStatus(404);
    }
    if (comment.user_id != req.session.user_id) {
      return res.sendStatus(403);
    }

    await comment.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
