/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { Client } = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const clientData = [
    {
        // client_id: generated by sequelize assumed 1
        org_id: 1,
        contact_id: 4,
        name: "AGCO",
        address_1: "AGCO Address Line 1",
        address_2: "AGCO Address Line 2",
        city: "Duluth",
        state: "Georgia",
        zip: 30338,
    },
    {
        // client_id: generated by sequelize assumed 1
        org_id: 1,
        contact_id: 5,
        name: "OCGA",
        address_1: "OCGA Address Line 1",
        address_2: "OCGA Address Line 2",
        city: "Denver",
        state: "Colorado",
        zip: 12345,
    },
];

// create function that bulk creates data using the array I created
const seedClient = () => Client.bulkCreate(clientData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedClient;