const { User } = require("../models");

const userData = [
  {
    username: "kvnbachata1",
    email: "kevin@gmail.com",
    password: "kevintestpw",
  },
  {
    username: "nicknosenest",
    email: "nick@gmail.com",
    password: "nicktestpw",
  },
  {
    username: "devindoesdallas",
    email: "devin@gmail.com",
    password: "devintestpw",
  },
  {
    username: "ceciluvsbailar",
    email: "cecilia@gmail.com",
    password: "ceciliatestpw",
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
