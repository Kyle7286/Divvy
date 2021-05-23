const User = require('./user');
const Org = require('./org');
const Team = require('./team');
const Client = require('./client');
const Ticket = require('./ticket');
const Comment = require('./comment');
const Reward = require('./reward');

// ORG ASSOCATIONS

Org.hasMany(User, {
  foreignKey: 'org_id',
  onDelete: 'CASCADE'
});

User.belongsTo(Org, {
  foreignKey: 'org_id',
  onDelete: 'CASCADE'
});

// TEAM ASSOCATIONS

Org.hasMany(Team, {
  foreignKey: 'org_id',
  onDelete: 'CASCADE'
});

Team.belongsTo(Org, {
  foreignKey: 'org_id',
  onDelete: 'CASCADE'
});

Team.hasMany(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.belongsTo(Team, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// CLIENT ASSOCATIONS

Org.hasMany(Client, {
  foreignKey: 'org_id',
  onDelete: 'CASCADE'
});

Client.belongsTo(Org, {
  foreignKey: 'org_id',
  onDelete: 'CASCADE'
});

Client.hasMany(User, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE',
  as: 'contact'
});

User.belongsTo(Client, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE',
  as: 'contact'
});

// TICKET ASSOCATIONS

Ticket.belongsTo(Client, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE',
});

Client.hasMany(Ticket, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE',
});

Ticket.belongsTo(User, {
  foreignKey: 'assigned_to',
  onDelete: 'CASCADE',
  as: 'ticketuser'
});

User.hasMany(Ticket, {
  foreignKey: 'assigned_to',
  onDelete: 'CASCADE',
  as: 'ticketuser'
});

Ticket.belongsTo(Team, {
  foreignKey: 'team_id',
  onDelete: 'CASCADE',
});

Team.hasMany(Ticket, {
  foreignKey: 'team_id',
  onDelete: 'CASCADE',
});

// COMMENT ASSOCATIONS

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Ticket.hasMany(Comment, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE',
})

Comment.belongsTo(Ticket, {
  foreignKey: 'ticket_id',
  onDelete: 'CASCADE',
});

// REWARD ASSOCIATIONS
Reward.belongsTo(Team, {
  foreignKey: 'team_id',
  onDelete: 'CASCADE'
});

Team.hasMany(Reward, {
  foreignKey: 'team_id',
  onDelete: 'CASCADE'
});


module.exports = {
  User,
  Org,
  Team,
  Client,
  Ticket,
  Comment,
  Reward
};
