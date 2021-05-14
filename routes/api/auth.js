const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router.route("/login")
  // .get(orgController.findById)
  .post(authController.findById);

// Matches with "/api/org/:id"
// router
//   .route("/:id")
//   .get(orgController.findById)
//   .put(orgController.update)
//   .delete(orgController.remove);

module.exports = router;