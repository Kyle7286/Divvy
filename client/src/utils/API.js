/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import axios from "axios";

/* -------------------------------------------------------------------------- */
/*                        Define Client Side API Calls                        */
/* -------------------------------------------------------------------------- */

export default {

    /* --------------------------------- tickets -------------------------------- */

    // Get all tickets
    getAllTickets: function () {
        return axios.get("/api/ticket");
    },

    /* ---------------------------------- users --------------------------------- */
    // Get all USERS
    getAllUsers: function () {
        return axios.get("/api/user");
    },

    /* ---------------------------------- users --------------------------------- */
    // Get single USER
    getSingleUser: function () {
        return axios.get("/api/user/1");
    },
    
    checkAuth: function () {
        return axios.get("/api/auth/authcheck");
    }

};

