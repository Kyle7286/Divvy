const { Comment, Ticket, Team, Org, User } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async function (req, res) {
    try {
      const commentData = await Comment.findAll({});
      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      const commentData = await Comment.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
          {
            model: Ticket,
            attributes: ['title', 'Description'],
          },
        ],
      });
      res.status(200).json(commentData)
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const commentData = await Comment.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id
        }
      });

      // If no data found with that ID then return message
      if (!commentData) {
        res.status(404).json({ message: `Delete not possible. No Comment with id ${req.params.id} found in the database!` });
        return;
      }

      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};
