const { Client, User, Org, Team } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async function (req, res) {
    try {
      const clientData = await Client.findAll({
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
      res.status(200).json(clientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findAllByOrg: async function (req, res) {
    try {
      const clientData = await Client.findAll({
        where: { org_id: req.params.id },
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
      res.status(200).json(clientData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
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
  create: async function (req, res) {
    try {
      // Find the user who did the request to get the appropriate details
      const getUser = await User.findOne({
        where: {
          id: req.session.user_id
        }
      })

      const org_id = getUser.org_id

      // Create the client user first
      const newUser = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        org_id,
        password: 'pass1234', //placeholder for now
        role: 'Client',
        is_manager: false,
        profile_icon: ""
      })

      // Create the Client second
      if (newUser) {
        const newClient = await Client.create({
          name: req.body.name,
          org_id: getUser.org_id,
          contact_id: newUser.id,
          address_1: req.body.add1,
          address_2: req.body.add2,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip

        })
        res.status(200).json({ newUser, newClient });
      }
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const clientData = await Client.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      res.status(200).json(clientData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const clientData = await Client.destroy({
        where: {
          id: req.params.id
        }
      });

      // If no data found with that ID then return message
      if (!clientData) {
        res.status(404).json({ message: `Delete not possible. No Client with id ${req.params.id} found in the database!` });
        return;
      }

      res.status(200).json(clientData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};
