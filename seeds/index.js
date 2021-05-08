/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    // Import all the seed data functions created in this directory
        const seedClient = require('./client-seeds');
        const seedComment = require('./comment-seeds');
        const seedOrg = require('./org-seeds');
        const seedTeam = require('./team-seeds');
        const seedTicket = require('./ticket-seeds');
        const seedUser = require('./user-seeds');

    
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

        // await seedClient();
        // console.log('\n----- CLIENTS SEEDED -----\n');

        // await seedComment();
        // console.log('\n----- COMMENTS SEEDED -----\n');

        await seedOrg();
        console.log('\n----- ORG SEEDED -----\n');

        // await seedTeam();
        // console.log('\n----- TEAMS SEEDED -----\n');

        // await seedTicket();
        // console.log('\n----- TICKETS SEEDED -----\n');

        await seedUser();
        console.log('\n----- USERS SEEDED -----\n');

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