const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Get all objects and JOIN with user data
    const postData = await Post.findAll({
      attributes: { exclude: ["password"] },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["commentary", "user_id", "id"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData
      .map((post) => post.get({ plain: true }))
      .map((post) => ({
        ...post,
        comments: post.comments.map((comment) => ({
          commentary: comment.commentary,
          username: comment.user.username,
          isMine: comment.user_id === req.session.user_id,
          id: comment.id,
        })),
        isMine: post.user_id === req.session.user_id,
      }));
    console.log(post[0].comments);
    // Pass serialized data and session flag into template
    res.render("homepage", {
      post,
      logged_in: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/post/:id", withAuth, async (req, res) => {
  try {
    //do i need req.params.id here?
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render("single-post", {
      post,
      logged_in: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.user_id) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.user_id) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});
module.exports = router;
