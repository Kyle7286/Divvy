/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import axios from "axios";
/* -------------------------------------------------------------------------- */
/*                        Define Client Side API Calls                        */
/* -------------------------------------------------------------------------- */
export default {
    /* --------------------------------- tickets -------------------------------- */

    // Get all tickets
    getAllTickets: function () {
        return axios.get("/api/ticket");
    },

    // New Tickets
    newTicket: function (newTicket) {
        return axios.post("/api/ticket", newTicket);
    },

    // Update Tickets
    updateTicket: function (id, updatedTicket) {
        return axios.put("/api/ticket/" + id, updatedTicket);
    },

    // Delete Tickets
    deleteTicket: function (id) {
        return axios.delete("api/ticket/" + id);
    },

    /* ---------------------------------- users --------------------------------- */
    // Get all USERS
    getAllUsers: function () {
        return axios.get("/api/user");
    },
    newUser: function (newUser) {
        return axios.post("/api/user", newUser);
    },


    // Get single USER
    getCurrentUser: function () {
        return axios.get("/api/user/current");
    },

    // Get single USER by ID
    getSingleUser: function () {
        return axios.get("/api/user/2");
    },

    // Update User
    updateUser: function (id, updatedTicket) {
        return axios.put("/api/user/" + id, updatedTicket);
    },


    /* ---------------------------------- clients ------------------------------ */
    // Get all clients
    getAllClients: function () {
        return axios.get("/api/client");
    },
    /* -------------------------------- authcheck ------------------------------- */
    checkAuth: function () {
        return axios.get("/api/auth/authcheck");
    },
    /* ---------------------------------- login --------------------------------- */
    login: function ({ email, password }) {
        return axios.post("/api/auth/login", { email, password });
    },
    /* ---------------------------------- logout --------------------------------- */
    logout: function () {
        return axios.post("/api/auth/logout");
    },
    
    /* ----------------------------------- orgs ---------------------------------- */
    newOrg: function (newOrg) {
        return axios.post("/api/org", newOrg);
    },
    getOrg: function () {
        return axios.get("/api/org/current")
    }
};
