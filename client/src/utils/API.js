/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import axios from "axios";
/* -------------------------------------------------------------------------- */
/*                        Define Client Side API Calls                        */
/* -------------------------------------------------------------------------- */
export default {
    /* --------------------------------- tickets -------------------------------- */

        // Get all tickets
        getAllTickets: function () {
            return axios.get("/api/ticket");
        },

        // Update Tickets
        updateTicket: function(id,updatedTicket) {
            return axios.put("/api/ticket/"+id, updatedTicket);
        },
       
    /* ---------------------------------- users --------------------------------- */
        // Get all USERS
        getAllUsers: function () {
            return axios.get("/api/user");
        },
    /* -------------------------------- authcheck ------------------------------- */
        checkAuth: function () {
            return axios.get("/api/auth/authcheck");
        },
    /* ---------------------------------- login --------------------------------- */
        login: function ({email, password}) {
            return axios.post("/api/auth/login", {email, password});
        },
    /* ---------------------------------- logout --------------------------------- */
        logout: function () {
            return axios.post("/api/auth/logout");
        }
};