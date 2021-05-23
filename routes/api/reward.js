const router = require("express").Router();
const rewardController = require("../../controllers/rewardController");

// Matches with "/api/reward"
router.route("/")
  .get(rewardController.findAll)
  // .post(rewardController.create);

// // Matches with "/api/team/:id"
// router
//   .route("/:id")
//   .get(rewardController.findById)
//   .put(rewardController.update)
//   .delete(rewardController.remove);

module.exports = router;
