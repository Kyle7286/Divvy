const router = require("express").Router();
const rewardController = require("../../controllers/rewardController");

// Matches with "/api/reward"
router.route("/")
  .get(rewardController.findAllByTeam);

// Matches with "/api/reward"
router.route("/points")
  .get(rewardController.tallyAllPointsByUser)


module.exports = router;
