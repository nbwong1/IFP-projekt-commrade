const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    commentary: "When will the event be held?",
    post_id: 3,
  },
  {
    user_id: 2,
    commentary: "What is the dress code?",
    post_id: 1,
  },
  {
    user_id: 3,
    commentary: "How many people can I take with me?",
    post_id: 4,
  },
  {
    user_id: 4,
    commentary: "When wil you host an event for beginners?",
    post_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
