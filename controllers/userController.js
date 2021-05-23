const { User, Org, Team, Ticket } = require("../models");

// Defining methods for the user
module.exports = {
  findAll: async function (req, res) {
    console.log(req.session);
    try {
      const userData = await User.findAll({
        include: [
          {
            model: Ticket,
            as: 'ticketuser',
          },
        ],
      });;
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      const userData = await User.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: Org,
            attributes: ['name'],
          },
          {
            model: Team,
            attributes: ['name'],
          },
          {
            model: Ticket,
            as: 'ticketuser',
            include: [
              {
                model: User,
                as: 'ticketuser'
              },
            ]
          },
        ],
      });
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  findCurrentUser: async function (req, res) {
    try {

      console.log(`Fetching USER: ${req.session.user_id}`);
      const userData = await User.findOne({
        where: { id: req.session.user_id },
        include: [
          {
            model: Org,
            attributes: ['name'],
          },
          {
            model: Team,
            attributes: ['name'],
          },
          {
            model: Ticket,
            as: 'ticketuser',
            include: [
              {
                model: User,
                as: 'ticketuser'
              },
            ]
          },
        ],
      });
      console.log(userData.dataValues);
      res.status(200).json(userData.dataValues);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id
        }
      });

      // If no data found with that ID then return message
      if (!userData) {
        res.status(404).json({ message: `Delete not possible. No User with id ${req.params.id} found in the database!` });
        return;
      }

      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  creatNewEmployee: async function (req, res) {
    console.log(req.body);
    console.log(req.session.user_id);
    try {
      // Find the current user to get org id
      const otherData = await User.findOne({
        where: {
          id: req.session.user_id
        }
      })

      // Added the extra data needed to create employee to the body
      req.body["org_id"] = otherData.org_id;
      req.body["role"] = "Employee";
      req.body["password"] = "pass1234";
      req.body["is_manager"] = false;
      req.body["profile_icon"] = "";

      const empData = await User.create(req.body);
      res.status(200).json(empData);

    } catch (err) {
      console.log(err);
      res.status(422).json(err);

    }


  }
};
