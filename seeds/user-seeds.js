/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { User } = require('../models');

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const userData = [
    // USER 1 - Admin
    {
        org_id: 1,
        client_id: null, 
        first_name: "Ryan",
        last_name: "Johnson",
        role: 0,
        is_manager: false,
        password: 'pass1234',
        phone_number: '313-355-5881',
        email: 'admin@email.com',
        team_id: null,
        profile_icon: ""
    },
    // USER 2 - Manager
    {
        org_id: 1,
        client_id: null,
        first_name: "John",
        last_name: "Bell",
        role: 1,
        is_manager: true,
        password: 'pass1234',
        phone_number: '404-955-3455',
        email: 'manager@email.com',
        team_id: 1,
        profile_icon: ""
    },
    // USER 3 - Employee
    {
        org_id: 1,
        client_id: null,
        first_name: "Brandon",
        last_name: "Haley",
        role: 1,
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-245-6911',
        email: 'employee@email.com',
        team_id: 1,
        profile_icon: ""
    },
    // USER 4 - Client
    {
        org_id: 1,
        client_id: 1,
        first_name: "Alan",
        last_name: "Smith",
        role: 2,
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-245-6912',
        email: 'client1@email.com',
        team_id: null,
        profile_icon: ""
    },
    // USER 5 - Client
    {
        org_id: 1,
        client_id: null,
        first_name: "Maximus",
        last_name: "Aurellias",
        role: 2,
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-312-6742',
        email: 'client2@email.com',
        team_id: null,
        profile_icon: ""
    },


];

// create function that bulk creates data using the array I created
const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedUser;