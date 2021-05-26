/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { User } = require('../models');

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const userData = [
    // =============================== TEAM 1 ===============================

    // USER 1 - Admin
    {
        org_id: 1,
        client_id: null,
        first_name: "Ryan",
        last_name: "Johnson",
        role: "Admin",
        is_manager: false,
        password: 'pass1234',
        phone_number: '313-355-5881',
        email: 'admin@email.com',
        team_id: null,
        profile_icon: "https://randomuser.me/api/portraits/men/74.jpg"
    },
    // USER 2 - Manager
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "John",
        last_name: "Bell",
        role: "Employee",
        is_manager: true,
        password: 'pass1234',
        phone_number: '404-955-3455',
        email: 'manager@email.com',
        profile_icon: "https://randomuser.me/api/portraits/men/49.jpg"
    },
    // USER 3 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Brandon",
        last_name: "Haley",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-245-6911',
        email: 'employee@email.com',
        profile_icon: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    // USER 4 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Mike",
        last_name: "Wilson",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-235-6911',
        email: 'employee2@email.com',
        profile_icon: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    // USER 5 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Malcom",
        last_name: "Smith",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '403-235-6911',
        email: 'employee3@email.com',
        profile_icon: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    // USER 6 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Antiguo",
        last_name: "Cornelius",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '103-235-6911',
        email: 'employee4@email.com',
        profile_icon: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    // USER 6 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Katie",
        last_name: "Burk",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '102-234-5111',
        email: 'employee5@email.com',
        profile_icon: "https://randomuser.me/api/portraits/women/24.jpg"
    },
    // USER 7 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Jessica",
        last_name: "Woods",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '102-235-6911',
        email: 'employee6@email.com',
        profile_icon: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    // USER 7 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Zaya",
        last_name: "Stars",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '102-235-5431',
        email: 'employee7@email.com',
        profile_icon: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    // USER 8 - Employee
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Tonya",
        last_name: "Hics",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '102-251-0111',
        email: 'employee8@email.com',
        profile_icon: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Lexie",
        last_name: "Fields",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '412-251-1451',
        email: 'employee9@email.com',
        profile_icon: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
        org_id: 1,
        team_id: 1,
        client_id: null,
        first_name: "Sam",
        last_name: "Gruyer",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '123-567-1451',
        email: 'employee10@email.com',
        profile_icon: "https://randomuser.me/api/portraits/men/43.jpg"
    },
];

// create function that bulk creates data using the array I created
const seedTeam1 = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedTeam1;