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
            // references: {
            //     model: 'client',
            //     key: 'id',
            // },
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'team',
            //     key: 'id',
            // },
        },
        user_id_assigned: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'user',
            //     key: 'id',
            // },
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
                isIn: [['0', '1', '2', '3']],
                max: 3,
                isNumeric: true,
                len:[1],
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
        user_id_created: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'user',
            //     key: 'id',
            // },
        },
        date_created: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },
        date_due: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },
        date_closed: {
            type: DataTypes.STRING,
            allowNull: false,
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
