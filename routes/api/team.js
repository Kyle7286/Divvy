const router = require("express").Router();
const tagController = require("../../controllers/tagController");

// Matches with "/api/tag"
router.route("/")
  .get(tagController.findAll)
  .post(tagController.create);

// Matches with "/api/tag/:id"
router
  .route("/:id")
  .get(tagController.findById)
  .put(tagController.update)
  .delete(tagController.remove);

module.exports = router;
