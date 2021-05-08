const router = require("express").Router();
const teamController = require("../../controllers/teamController");

// Matches with "/api/team"
router.route("/")
  .get(teamController.findAll)
  .post(teamController.create);

// Matches with "/api/team/:id"
router
  .route("/:id")
  .get(teamController.findById)
  .put(teamController.update)
  .delete(teamController.remove);

module.exports = router;
