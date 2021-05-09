/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { Comment } = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const commentData = [
    {
        ticket_id: 1,
        user_id: 3,
        comment: "Thank you for your ticket. I am looking into at this time.",
        date_created: "2021-05-01T16:45:12+0000", // confirm format
        date_modified: null, // confirm format
    },
    {
        ticket_id: 1,
        user_id: 4,
        comment: "Awesome. Thank you so much. Call me directly if you need me to show you the issue first hand. I am available anytime after 3pm et.",
        date_created: "2021-05-01T16:50:12+0000", // confirm format
        date_modified: null, // confirm format
    },

];

// create function that bulk creates data using the array I created
const seedComment = () => Comment.bulkCreate(commentData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedComment;