const { Reward, Team, Org, User } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async function (req, res) {
    try {

      // Get Team ID
      const userData = await User.findOne({
        where: {
          id: req.session.user_id
        }
      })
      console.log("ORG ID:", userData.dataValues.team_id);

      // Find all the rewards under the team_id of the user
      const rewardData = await Reward.findAll({
        where: {
          team_id: userData.dataValues.team_id
        }
      });

      res.status(200).json(rewardData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
