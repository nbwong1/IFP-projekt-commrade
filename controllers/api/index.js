const router = require("express").Router();
const commentRoute = require("./comment-route");
const groupRoute = require("./group-route");
const postRoute = require("./post-route");
const userRoute = require("./user-route");

router.use("/comments", commentRoute);
router.use("/groups", groupRoute);
router.use("/posts", postRoute);
router.use("/users", userRoute);

module.exports = router;
