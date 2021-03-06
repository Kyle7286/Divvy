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
        email: 'client@email.com',
        profile_icon: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    // Client 2
    {
        org_id: 1,
        client_id: 2,
        first_name: "Maximus",
        last_name: "Aurellias",
        role: "Client",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-312-6742',
        email: 'client2@email.com',
        team_id: null,
        profile_icon: "https://randomuser.me/api/portraits/men/52.jpg"
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
        phone_number: '404-212-6132',
        email: 'client3@email.com',
        team_id: null,
        profile_icon: "https://randomuser.me/api/portraits/men/53.jpg"
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
        profile_icon: "https://randomuser.me/api/portraits/women/54.jpg"
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
        profile_icon: "https://randomuser.me/api/portraits/men/55.jpg"
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