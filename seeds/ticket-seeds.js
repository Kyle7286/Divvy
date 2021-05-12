/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { Ticket } = require('../models');

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const ticketData = [
    {
        client_id: 1,
        team_id: 1,
        title: "T1 - Printer issues",
        description: "Printer is down and wont connect to the network, need assistance asap. Thanks",
        date_created: "2021-05-01T16:36:12+0000",
        assigned_to: 3,
        date_completed: null,
        status: "In Progress",
        priority: 1,
        points: 10
    },
    {
        client_id: 1,
        team_id: 1,
        title: "T2 - Scanning issues",
        description: "Scanner is down and wont connect to the network, need assistance asap. Thanks",
        date_created: "2021-05-02T16:36:12+0000",
        assigned_to: null,
        date_completed: null,
        status: "Open",
        priority: 1,
        points: 10
    },
    {
        client_id: 1,
        team_id: 1,
        title: "T3 - Update Acrobat",
        description: "Need help updating Adobe Acrobat Continuous Track for all users",
        date_created: "2021-05-03T12:36:12+0000",
        assigned_to: null,
        date_completed: null,
        status: "Open",
        priority: 2,
        points: 10
    },
    {
        client_id: 1,
        team_id: 1,
        title: "T4 - Install QuickBooks 2021 Pro",
        description: "The latest is released and I need it installed by tomorrow if possible",
        date_created: "2021-05-04T10:01:12+0000",
        assigned_to: null,
        date_completed: null,
        status: "Open",
        priority: 2,
        points: 10
    },
    {
        client_id: 1,
        team_id: 1,
        title: "T5 - Setup laptop/workstation",
        description: "We purchased a new laptop for Sarah and needs it setup to connect to the cloud",
        date_created: "2021-05-05T11:01:12+0000",
        assigned_to: null,
        date_completed: null,
        status: "Open",
        priority: 2,
        points: 10
    },
    {
        client_id: 1,
        team_id: 1,
        title: "T6 - User cannot launch app in the cloud",
        description: "All users cannot launch Winzip in the cloud",
        date_created: "2021-05-06T11:01:12+0000",
        assigned_to: null,
        date_completed: null,
        status: "Completed",
        priority: 2,
        points: 10
    },
    {
        client_id: 1,
        team_id: 1,
        title: "T7 - Acrobat crashed after running report",
        description: "Ran a report in Acrobat and it keeps crashing immediately",
        date_created: "2021-05-07T11:01:12+0000",
        assigned_to: null,
        date_completed: null,
        status: "Open",
        priority: 1,
        points: 10
    },
];

// create function that bulk creates data using the array I created
const seedTicket = () => Ticket.bulkCreate(ticketData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedTicket;