const { Org, User } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async function (req, res) {
    try {
      const orgData = await Org.findAll({})
      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      const userData = await User.findOne({
        where: { id: req.session.user_id },
        include: [
          {
            model: Org,
            attributes: ['name'],
          },
        ],
      });
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const orgData = await Org.create(req.body);
      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const orgData = await Org.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const orgData = await Org.destroy({
        where: {
          id: req.params.id
        }
      });

      // If no data found with that ID then return message
      if (!orgData) {
        res.status(404).json({ message: `Delete not possible. No Org with id ${req.params.id}found in the database!` });
        return;
      }

      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};
