const User = require('./user');
const Company = require('./company');
// const Team = require('./team');
// const Ticket = require('./ticket');
// const Comments = require('./comments');
// const Client = require('./client');

Company.hasMany(User, {
  foreignKey: 'company_id',
});

User.belongsTo(Company, {
  foreignKey: 'company_id',
});

// Company.hasMany(Team, {
//   foreignKey: 'company_id',
// });

// Company.hasMany(Client, {
//   foreignKey: 'company_id',
// });


// User.belongsTo(Team, {
//   foreignKey: 'team_id',
// });

// User.hasMany(Ticket, {
//   foreignKey: 'team_id',
// });

// Ticket.hasMany(User, {
//   foreignKey: 'user_id',
// });

// Client.hasMany(Ticket, {
//   foreignKey: 'client_id',
// });

// Location.belongsToMany(Traveller, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'location_travellers'
// });

// Team.hasMany(Ticket, {
//   foreignKey: 'team_id',
// });

// User.hasMany(Comments, {
//   foreignKey: 'user_id',
// });

// Comments.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// Comments.belongsTo(Ticket, {
//   foreignKey: 'ticket_id',
// });


module.exports = {
  User,
  Company
  // Team,
  // Ticket,
  // Comments,
  // Client
};
