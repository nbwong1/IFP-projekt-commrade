const { Post } = require("../models");

const postData = [
  {
    user_id: 1,
    title: "Upcoming Bachata social",
    content:
      "Group x will be holding and event in x location.we home you can come and join us",
    location: "balboa park",
  },
  {
    user_id: 2,
    title: "last minute Merengue",
    content:
      "Group Y would love to have you all join our lern the basics of merengue with us ",
    location: "North park",
  },
  {
    user_id: 3,
    title: "Salsa",
    content:
      "If you are an intermediate salsa dancer you might want to come to out social dance ",
    location: "UCSD bulding x",
  },
  {
    user_id: 4,
    title: "swing",
    content: "Come and swing it up with Z group this weekend",
    location: "downtown",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
