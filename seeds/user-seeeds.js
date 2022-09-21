const { User } = require("../models");

const userData = [
  {
    name: "kevin",
    email: "kevin@gmail.com",
    password: "kevintestpw",
  },
  {
    name: "nick",
    email: "nick@gmail.com",
    password: "nicktestpw",
  },
  {
    name: "devin",
    email: "devin@gmail.com",
    password: "devintestpw",
  },
  {
    name: "cecilia",
    email: "cecilia@gmail.com",
    password: "ceciliatestpw",
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
