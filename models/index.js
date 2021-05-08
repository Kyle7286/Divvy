const User = require('./user');
const Org = require('./org');
const Team = require('./team');
// const Ticket = require('./ticket');
// const Comments = require('./comments');
// const Client = require('./client');

Org.hasMany(User, {
  foreignKey: 'org_id',
});

User.belongsTo(Org, {
  foreignKey: 'org_id',
});

Org.hasMany(Team, {
  foreignKey: 'org_id',
});

Team.belongsTo(Org, {
  foreignKey: 'org_id',
});

// Team.hasMany(User, {
//   foreignKey: 'team_id',
// });

// User.belongsTo(Team, {
//   foreignKey: 'user_id',
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
  Org,
  Team
  // Ticket,
  // Comments,
  // Client
};
