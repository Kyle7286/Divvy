const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Matches with "/api/comment"
router.route("/")
  .get(commentController.findAll)
  .post(commentController.create);

// Matches with "/api/comment/:id"
router
  .route("/:id")
  .get(commentController.findById)
  .put(commentController.update)
  .delete(commentController.remove);

module.exports = router;
