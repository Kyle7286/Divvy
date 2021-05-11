const { Team, Org, User } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async function (req, res) {
    try {
      const teamData = await Team.findAll({});
      res.status(200).json(teamData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      const teamData = await Team.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: Org,
            attributes: ['name'],
          },
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
        ],
      });
      res.status(200).json(teamData)
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const teamData = await Team.create(req.body);
      res.status(200).json(teamData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const teamData = await Team.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      res.status(200).json(teamData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const teamData = await Team.destroy({
        where: {
          id: req.params.id
        }
      });

      // If no data found with that ID then return message
      if (!teamData) {
        res.status(404).json({ message: `Delete not possible. No Team with id ${req.params.id} found in the database!` });
        return;
      }

      res.status(200).json(teamData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};
