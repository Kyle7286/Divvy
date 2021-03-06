// const { json } = require("sequelize/types"); 
const { Reward, Ticket, Team, Org, User } = require("../models");

module.exports = {
  findAllByTeam: async function (req, res) {
    try {

      // Get Team ID
      const userData = await User.findOne({
        where: {
          id: req.session.user_id
        }
      })

      // Find all the rewards under the team_id of the user
      const rewardData = await Reward.findAll({
        where: {
          team_id: userData.dataValues.team_id
        },
        order: [
          ['req_points', 'ASC']
        ]
      });

      res.status(200).json(rewardData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  tallyAllPointsByUser: async function (req, res) {
    try {

      // Get Tickets by asignee_id
      const ticketData = await Ticket.findAll({
        where: {
          assigned_to: req.session.user_id,
          status: "Completed"
        }
      })

      // Sum up the points of the user's completed tickets
      let total = 0;
      for (let i = 0; i < ticketData.length; i++) {
        total = total + ticketData[i].dataValues.points;
      }

      // Send back the TicketData and the total points
      res.status(200).json({ ticketData: [...ticketData], points: total });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  },
};
