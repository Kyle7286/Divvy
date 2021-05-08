const router = require("express").Router();
const customerController = require("../../controllers/customerController");

// Matches with "/api/customer"
router.route("/")
  .get(customerController.findAll)
  .post(customerController.create);

// Matches with "/api/customer/:id"
router
  .route("/:id")
  .get(customerController.findById)
  .put(customerController.update)
  .delete(customerController.remove);

module.exports = router;
