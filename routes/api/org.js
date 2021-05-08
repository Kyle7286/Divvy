const router = require("express").Router();
const orgController = require("../../controllers/orgController");

// Matches with "/api/books"
router.route("/")
  .get(orgController.findAll)
  .post(orgController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(orgController.findById)
  .put(orgController.update)
  .delete(orgController.remove);

module.exports = router;
