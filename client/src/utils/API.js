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

    /* -------------------------------- authcheck ------------------------------- */
    checkAuth: function () {
        return axios.get("/api/auth/authcheck");
    },

    /* ---------------------------------- login --------------------------------- */
    login: function ({email, password}) {
        return axios.post("/api/auth/login", {email, password});
    }

};

