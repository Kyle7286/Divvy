const { Ticket, Comment, Client, User, Org, Team } = require("../models");

// Defining methods for the ticketsController
module.exports = {

  // returns all tickets in the db as an array of objects
  findAll: async function (req, res) {
    try {
      console.log(req.body);
      const ticketData = await Ticket.findAll(
      {
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'assignedUser'
          },
          {
            model: Client,
            attributes: ['name'],
            include: [
              {
                model: User,
                attributes: ['first_name', 'last_name', 'phone_number'],
                as: 'contact'
              }
            ],
          },
        ],
      }
      )
      
        
      
      res.status(200).json(ticketData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // returns a single ticke tbased on ide
  findById: async function (req, res) {
    try {
      console.log(req.body);
      const ticketData = await Ticket.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            as: 'assigned_user'
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
