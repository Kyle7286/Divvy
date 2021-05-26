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
        req_points: 10,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Lunch',
        req_points: 25,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Gift Card (25)',
        req_points: 50,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Gift Card (50)',
        req_points: 75,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Half-Day',
        req_points: 100,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Half-Day',
        req_points: 125,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Coffee',
        req_points: 65,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Candy',
        req_points: 35,
        team_id: 1,
        round: 1
    },
    {
        reward: 'Candy',
        req_points: 5,
        team_id: 2,
        round: 1
    },
    {
        reward: 'Lunch',
        req_points: 20,
        team_id: 2,
        round: 1
    },
    {
        reward: 'Gift Card (25)',
        req_points: 40,
        team_id: 2,
        round: 1
    },

];

// create function that bulk creates data using the array I created
const seedReward = () => Reward.bulkCreate(rewardData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedReward;