const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Ticket extends Model {}

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        assigned_to: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Open', 'Assigned', 'In Progress', 'Completed']],
            },
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['1', '2', '3', '4']],
                max: 4,
                isNumeric: true,
                len:[1],
              },
        },
        date_created: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },
        date_completed: {
            type: DataTypes.STRING,
            validate: {
                isDate: true
            },
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket',
    }
);

module.exports = Ticket;
