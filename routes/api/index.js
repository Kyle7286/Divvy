const router = require("express").Router();
const bookRoutes = require("./books");
const orgRoutes = require("./org");
const teamRoutes = require("./team");
const userRoutes = require("./user");
const customerRoutes = require("./customer");
const ticketRoutes = require("./ticket");
const commentRoutes = require("./comment");
const tagRoutes = require("./tag");

// Book routes
router.use("/books", bookRoutes);
router.use("/org", orgRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);
router.use("/customer", customerRoutes);
router.use("/ticket", ticketRoutes);
router.use("/comment", commentRoutes);
router.use("/tag", tagRoutes);

module.exports = router;
