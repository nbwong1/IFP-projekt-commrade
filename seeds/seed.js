const seedUsers = require("./user-seeeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");
const sequelizeConnection = require("../config/connection");

const seedAll = async () => {
  await sequelizeConnection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedPosts();
  console.log("\n----- POSTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
