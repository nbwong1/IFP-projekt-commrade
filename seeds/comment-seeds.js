const { Comment } = require("../../../challengesRepos/Tech_Blog/models");

const commentData = [
  {
    user_id: 1,
    commentary: "when will the event be held?",
    post_id: 3,
  },
  {
    user_id: 2,
    commentary: "what is the dress code?",
    post_id: 1,
  },
  {
    user_id: 3,
    commentary: "how many people can i take with me?",
    post_id: 4,
  },
  {
    user_id: 4,
    commentary: "when wil you host an event for begginers?",
    post_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
