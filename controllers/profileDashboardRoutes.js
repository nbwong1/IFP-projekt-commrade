const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//done
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Post,
          attributes: [
            "id",
            "title",
            "content",
            "date_created",
            "location",
            "user_id",
          ],
          include: [
            {
              model: Comment,
              attributes: [
                "id",
                "commentary",
                "post_id",
                "user_id",
                "date_created",
              ],
              include: {
                model: User,
                attributes: ["username"],
              },
            },
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
        {
          model: Post,
          attributes: [
            "id",
            "title",
            "content",
            "date_created",
            "location",
            "user_id",
          ],
          include: [
            {
              model: Comment,
              attributes: [
                "id",
                "commentary",
                "post_id",
                "user_id",
                "date_created",
              ],
              include: {
                model: User,
                attributes: ["username"],
              },
            },
            {
              model: User,
              attributes: ["username"],
            },
          ],
          as: "interests",
        },
      ],
    });
    const user = userData.get({ plain: true });
    console.log(user.interests);
    const interests = user.interests.map((post) => {
      return {
        ...post,
        isMine: post.user_id === req.session.user_id,
      };
    });
    const post = user.posts.map((post) => {
      return {
        ...post,
        isMine: post.user_id === req.session.user_id,
      };
    });

    res.render("dashboardProfile", {
      post,
      interests,
      logged_in: req.session.user_id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// done
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "content", "date_created"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "commentary",
            "post_id",
            "user_id",
            "date_created",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id " });
      return;
    }

    const post = postData.map((post) => post.get({ plain: true }));

    res.render("edit-post", { post, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
