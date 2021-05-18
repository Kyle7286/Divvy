/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { User } = require('../models');

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const userClientData = [
    // =============================== Client Users ===============================

    // Client 1
    {
        org_id: 1,
        client_id: 1,
        first_name: "Alan",
        last_name: "Walker",
        role: "Client",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-245-6912',
        email: 'client1@email.com',
        team_id: null,
        profile_icon: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    // Client - 2
    {
        org_id: 1,
        client_id: 2,
        first_name: "Maximus",
        last_name: "Aurellias",
        role: "Client",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-955-3455',
        email: 'manager@email.com',
        team_id: 1,
        profile_icon: "https://randomuser.me/api/portraits/men/49.jpg"
    },
    // Client - 3
    {
        org_id: 1,
        client_id: 3,
        first_name: "Susan",
        last_name: "Parker",
        role: "Client",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-245-6911',
        email: 'employee@email.com',
        team_id: 1,
        profile_icon: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    // Client - 4
    {
        org_id: 1,
        client_id: 4,
        first_name: "Susan",
        last_name: "Parker",
        role: "Client",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-123-5321',
        email: 'client4@email.com',
        team_id: null,
        profile_icon: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    // Client - 5
    {
        org_id: 1,
        client_id: 5,
        first_name: "Craig",
        last_name: "Thomas",
        role: "Client",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-212-1234',
        email: 'client5@email.com',
        team_id: null,
        profile_icon: "https://randomuser.me/api/portraits/men/42.jpg"
    },
];

// create function that bulk creates data using the array I created
const seedUserClient = () => User.bulkCreate(userClientData, {
    individualHooks: true,
    returning: true,
});

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedUserClient;