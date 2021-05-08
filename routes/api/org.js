const router = require("express").Router();
const orgController = require("../../controllers/orgController");

// Matches with "/api/org"
router.route("/")
  .get(orgController.findAll)
  .post(orgController.create);

// Matches with "/api/org/:id"
router
  .route("/:id")
  .get(orgController.findById)
  .put(orgController.update)
  .delete(orgController.remove);

module.exports = router;
