const { User } = require("../models");

const userData = [
  {
    username: "kevin",
    email: "kevin@gmail.com",
    password: "kevintestpw",
  },
  {
    username: "nick",
    email: "nick@gmail.com",
    password: "nicktestpw",
  },
  {
    username: "devin",
    email: "devin@gmail.com",
    password: "devintestpw",
  },
  {
    username: "cecilia",
    email: "cecilia@gmail.com",
    password: "ceciliatestpw",
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
