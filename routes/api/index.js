const router = require("express").Router();
const orgRoutes = require("./org");
const teamRoutes = require("./team");
const userRoutes = require("./user");
const clientRoutes = require("./client");
const ticketRoutes = require("./ticket");
const commentRoutes = require("./comment");
const tagRoutes = require("./tag");
const authRoutes = require("./auth");
const emailRoutes = require("./email");
const rewardRoutes = require("./reward");



// All routes
router.use("/org", orgRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);
router.use("/client", clientRoutes);
router.use("/ticket", ticketRoutes);
router.use("/comment", commentRoutes);
router.use("/tag", tagRoutes);
router.use("/auth", authRoutes);
router.use("/email", emailRoutes);
router.use("/reward", rewardRoutes);



module.exports = router;
