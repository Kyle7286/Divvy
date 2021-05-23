const router = require("express").Router();
const rewardController = require("../../controllers/rewardController");

// Matches with "/api/reward"
router.route("/")
  .get(rewardController.findAllByTeam);

// Matches with "/api/reward"
router.route("/points")
  .get(rewardController.tallyAllPointsByUser)



// // Matches with "/api/team/:id"
// router
//   .route("/:id")
//   .get(rewardController.findById)
//   .put(rewardController.update)
//   .delete(rewardController.remove);

module.exports = router;
