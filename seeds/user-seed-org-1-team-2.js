/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { User } = require('../models');

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const userData = [
    // =============================== TEAM 2 - Star Wars ===============================

    // Manager
    {
        org_id: 1,
        team_id: 2,
        client_id: null,
        first_name: "Mace",
        last_name: "Windu",
        role: "Employee",
        is_manager: true,
        password: 'pass1234',
        phone_number: '123-513-5313',
        email: 'mwindu@email.com',
        profile_icon: "https://www.denofgeek.com/wp-content/uploads/2020/12/the-mandalorian-mace-windu.jpg?resize=768%2C432"
    },
    // USER 3 - Employee
    {
        org_id: 1,
        team_id: 2,
        client_id: null,
        first_name: "Luke",
        last_name: "Skywalker",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '876-245-6911',
        email: 'lskywalker@email.com',
        profile_icon: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NDU4NTkwMzE5MzU1MjQw/why-luke-skywalker-is-an-amazing-duelist.jpg"
    },
    // USER 4 - Employee
    {
        org_id: 1,
        team_id: 2,
        client_id: null,
        first_name: "Yoda",
        last_name: "Minch",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '404-235-765',
        email: 'yminch@email.com',
        profile_icon: "https://miro.medium.com/max/1200/0*BKdazZwzr6yjQXdK"
    },
    // USER 5 - Employee
    {
        org_id: 1,
        team_id: 2,
        client_id: null,
        first_name: "Obi-Wan",
        last_name: "Kenobi",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '543-123-765',
        email: 'okenobi@email.com',
        profile_icon: "https://specials-images.forbesimg.com/imageserve/60620849fe5453e37864ecd8/960x0.jpg?fit=scale"
    },
    // USER 6 - Employee
    {
        org_id: 1,
        team_id: 2,
        client_id: null,
        first_name: "R2",
        last_name: "D2",
        role: "Employee",
        is_manager: false,
        password: 'pass1234',
        phone_number: '111-111-1111',
        email: 'r2d2@email.com',
        profile_icon: "https://images-na.ssl-images-amazon.com/images/I/51yKf-mzr3L._AC_.jpg"
    },
];

// create function that bulk creates data using the array I created
const seedTeam2 = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedTeam2;