const { Client, User, Org, Team } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    try {
      console.log(req.body);
      res.status(200).json(req.body);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      console.log(req.body);
      const clientData = await Client.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'contact'
          },
          {
            model: Org,
            attributes: ['name'],
          },
        ],
      });
      res.status(200).json(clientData)
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: function (req, res) {
    try {
      console.log(req.body);
      res.status(200).json(req.body);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: function (req, res) {
    try {
      console.log(req.body);
      res.status(200).json(req.body);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: function (req, res) {
    try {
      console.log(req.body);
      res.status(200).json(req.body);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};
