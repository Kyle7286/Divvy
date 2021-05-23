const router = require("express").Router();
const emailController = require("../../controllers/emailController");

// Matches with "/api/email"
router.route("/")
  .post(emailController.sendEmail);

module.exports = router;
