/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { Reward } = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const rewardData = [
    {
        reward: 'Lunch',
        req_points: 100,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Lunch',
        req_points: 200,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Gift Card (25)',
        req_points: 300,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Gift Card (50)',
        req_points: 500,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Half-Day',
        req_points: 500,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Half-Day',
        req_points: 600,
        team_id: 1,
        round: 1
    },

];

// create function that bulk creates data using the array I created
const seedReward = () => Reward.bulkCreate(rewardData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedReward;