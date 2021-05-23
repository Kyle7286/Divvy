/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

// Import all the seed data functions created in this directory
const seedOrg = require('./org-seeds');
const seedClient = require('./client-seeds');
const seedUserClient = require('./user-client-org-1');
const seedTeam1 = require('./user-seed-org-1-team-1');
const seedTeam2 = require('./user-seed-org-1-team-2');
const seedTeam = require('./team-org-1');
const seedTicketOrg1Team1 = require('./ticket-org-1-team-1');
const seedComment = require('./comment-seeds');
const seedReward = require('./reward-seeds');




// Import the database connection instance from connection / config
const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                    Define Function for Database Seeding                    */
/* -------------------------------------------------------------------------- */
/*
    Every time we run this seedAll function it will overwrite our existing 
    tables and refresh it with our latest models, then the data in our seed files
*/

const seedAll = async () => {

  await sequelize.sync({ force: true }); // Force true adds a drop table if exists- so it will override any existing data we have in there. 

  console.log('\n----- DATABASE SYNCED -----\n');

  await seedOrg();
  console.log('\n----- ORG SEEDED -----\n');

  await seedClient();
  console.log('\n----- CLIENTS SEEDED -----\n');

  await seedUserClient();
  console.log('\n----- USERCLIENT SEEDED -----\n');

  await seedTeam1();
  console.log('\n----- USERS ORG1 TEAM1 SEEDED -----\n');

  await seedTeam2();
  console.log('\n----- USERS ORG1 TEAM2 SEEDED -----\n');

  await seedTeam();
  console.log('\n----- TEAMS SEEDED -----\n');

  await seedTicketOrg1Team1();
  console.log('\n----- TICKETS SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedReward();
  console.log('\n----- REWARDS SEEDED -----\n');

  process.exit(0);

};

/* -------------------------------------------------------------------------- */
/*                          Execute Seed All Function                         */
/* -------------------------------------------------------------------------- */

/*
  NOTE:
  Due to something with scope, the best way to seed this should be running
  'node seeds/index.js from the root directory (as oppsed to coing into the
  seeds directory and trying to node index.js)
  */

seedAll();