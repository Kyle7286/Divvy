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
        org_id: 1,
        contact_id: 1,
        name: "AGCO",
        address_1: "AGCO Address Line 1",
        address_2: "AGCO Address Line 2",
        city: "Duluth",
        state: "Georgia",
        zip: 30338,
    },
    {
        org_id: 1,
        contact_id: 2,
        name: "OCGA",
        address_1: "OCGA Address Line 1",
        address_2: "OCGA Address Line 2",
        city: "Denver",
        state: "Colorado",
        zip: 12345,
    },
    {
        org_id: 1,
        contact_id: 3,
        name: "NCOR",
        address_1: "NCOR Address Line 1",
        address_2: "NCOR Address Line 2",
        city: "Houston",
        state: "Texas",
        zip: 43123,
    },
    {
        org_id: 1,
        contact_id: 4,
        name: "ALMO",
        address_1: "ALMO Address Line 1",
        address_2: "ALMO Address Line 2",
        city: "Atlanta",
        state: "Geogria",
        zip: 31116,
    },
    {
        org_id: 1,
        contact_id: 5,
        name: "TRLO",
        address_1: "TRLO Address Line 1",
        address_2: "TRLO Address Line 2",
        city: "Salt Lake City",
        state: "Utal",
        zip: 51523,
    },
];

// create function that bulk creates data using the array I created
const seedClient = () => Client.bulkCreate(clientData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedClient;