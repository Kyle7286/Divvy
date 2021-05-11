/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const {Team} = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
    // Define array of data to seed
    const teamData = [
        {
            org_id: 1,
            user_id: 2,
            name:'team one'
        },
        {
            org_id: 1,
            user_id: 2,
            name:'team two'
        },
    ];

    // create function that bulk creates data using the array I created
    const seedTeam = () => Team.bulkCreate(teamData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = seedTeam;  