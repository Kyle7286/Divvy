const { Ticket, Comment, Client, User, Org, Team } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async function (req, res) {
    try {
      const ticketData = await Ticket.findAll({});
      res.status(200).json(ticketData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      const ticketData = await Ticket.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'assignedUser'
          },
          {
            model: Team,
            attributes: ['name'],
          },
          {
            model: Client,
            attributes: ['name'],
            include: [
              {
                model: User,
                attributes: ['first_name', 'last_name'],
                as: 'contact'
              }
            ],
          },
          {
            model: Comment,
            include: [
              {
                model: User,
                attributes: ['first_name', 'last_name'],
              }
            ],
          },
        ],
      });
      res.status(200).json(ticketData)
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const ticketData = await Ticket.create(req.body);
      res.status(200).json(ticketData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const ticketData = await Ticket.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      res.status(200).json(ticketData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const ticketData = await Ticket.destroy({
        where: {
          id: req.params.id
        }
      });

      // If no data found with that ID then return message
      if (!ticketData) {
        res.status(404).json({ message: `Delete not possible. No Ticket with id ${req.params.id} found in the database!` });
        return;
      }

      res.status(200).json(ticketData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};
