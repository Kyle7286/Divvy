const { Org, User } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async function (req, res) {
    try {
      console.log(req.body);
      const orgData = await Org.findAll({})
      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      console.log(req.body);
      console.log(`req.params.id: ${req.params.id}`);
      const orgData = await Org.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
        ],
      });
      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      console.log(req.body);
      const orgData = await Org.create(req.body);
      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      console.log(req.body);
      console.log(`req.params.id: ${req.params.id}`);
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
      console.log(req.body);
      res.status(200).json(orgData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};
