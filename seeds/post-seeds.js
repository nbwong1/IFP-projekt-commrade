const { Post } = require("../models");

const postData = [
  {
    user_id: 1,
    title: "Upcoming Bachata Social",
    content:
      "Group x will be holding and event in x location. We hope you can come and join us",
    location: "Balboa Park",
  },
  {
    user_id: 2,
    title: "Last Minute Merengue",
    content:
      "Group Y would love to have you all join our learn the basics of merengue with us",
    location: "North Park",
  },
  {
    user_id: 3,
    title: "Salsa",
    content:
      "If you are an intermediate salsa dancer you might want to come to our social dance ",
    location: "UCSD Bulding x",
  },
  {
    user_id: 4,
    title: "Swing",
    content: "Come and swing it up with Z group this weekend",
    location: "Downtown",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
