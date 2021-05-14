const router = require("express").Router();
const orgRoutes = require("./org");
const teamRoutes = require("./team");
const userRoutes = require("./user");
const clientRoutes = require("./client");
const ticketRoutes = require("./ticket");
const commentRoutes = require("./comment");
const tagRoutes = require("./tag");


// All routes
router.use("/org", orgRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);
router.use("/client", clientRoutes);
router.use("/ticket", ticketRoutes);
router.use("/comment", commentRoutes);
router.use("/tag", tagRoutes);


module.exports = router;
