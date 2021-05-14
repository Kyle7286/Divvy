const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth/login"
router.route("/login")
  // .get(orgController.findById)
  .post(authController.login);

// Matches with "/api/auth/logout"
router.route("/logout")
  .post(authController.logout);

// Matches with "/api/org/:id"
// router
//   .route("/:id")
//   .get(orgController.findById)
//   .put(orgController.update)
//   .delete(orgController.remove);

module.exports = router;