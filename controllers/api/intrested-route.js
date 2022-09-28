const router = require("express").Router();

const { Utils } = require("sequelize");
const { Post, Comment, User, Interest } = require("../../models");
const withAuth = require("../../utils/auth");

// get route for Interests, gets all Interests
router.get("/", async (req, res) => {
  try {
    const InterestData = await Interest.findAll();
    res.status(200).json(InterestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post Interest route
router.post("/:post_id", withAuth, async (req, res) => {
  try {
    const newInterest = await Interest.create({
      user_id: req.session.user_id,
      post_id: req.params.post_id,
      ...req.body,
    });
    res.json(newInterest);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update route for Interests
router.put("/:id", async (req, res) => {
  Interest.update(
    {
      user_id: req.body.user_id,
      post_id: req.body.post_id,

      interest: req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedInterest) => {
      res.jsonO(updatedInterest);
    })
    .catch((err) => res.json(err));
});

// delete Interest route
router.delete("/:id", async (req, res) => {
  try {
    const Interest = await Interest.findByPk(req.params.id);
    if (!Interest) {
      return res.sendStatus(404);
    }
    if (Interest.user_id != req.session.user_id) {
      return res.sendStatus(403);
    }

    await Interest.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
