/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import axios from "axios";
/* -------------------------------------------------------------------------- */
/*                        Define Client Side API Calls                        */
/* -------------------------------------------------------------------------- */
export default {
    /* --------------------------------- tickets & Comments ------------------ */

    // Get all tickets
    getAllTickets: function () {
        return axios.get("/api/ticket");
    },

    // Get all tickets for org
    getAllTicketsByOrg: function (id) {
        return axios.get("/api/ticket/org/" + id);
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

    // New Comment
    newComment: function (newComment) {
        return axios.post("/api/comment/", newComment)
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

    // Create employee user
    creatNewEmployee: function (newEmployee) {
        console.log(newEmployee);
        return axios.post("/api/user/newemp", newEmployee)
    },


    /* ---------------------------------- clients ------------------------------ */
    // Get all clients
    getAllClients: function () {
        return axios.get("/api/client");
    },
    // Create new client
    createNewClient: function (newClient) {
        return axios.post("/api/client", newClient);
    },

    /* ---------------------------------- team------------------------------ */
    createNewTeam: function (newTeam) {
        return axios.post("/api/team", newTeam);
    },
    getAllOrgTeams: function () {
        return axios.get("/api/team");
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
    },

    /* ----------------------------------- Reward System ---------------------------------- */
    getAllTeamRewards: function () {
        return axios.get("/api/reward")
    },    
    getTotalUserPoints: function () {
        return axios.get("/api/reward/points")
    },

    /* ---------------------------------- email ---------------------------------- */
    sendEmail: function (emailOptions) {
        return axios.post("/api/email", emailOptions)
    },
};
