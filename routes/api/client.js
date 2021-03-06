const router = require("express").Router();
const clientController = require("../../controllers/clientController");

// Matches with "/api/client"
router.route("/")
  .get(clientController.findAll)
  .post(clientController.create);

// Matches with "/api/ticket/org/:id"
router
  .route("/org/:id")
  .get(clientController.findAllByOrg)

// Matches with "/api/client/:id"
router
  .route("/:id")
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;
