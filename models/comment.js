const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'ticket',
            //     key: 'id',
            // },
        },
        user_id: {
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
        date_modified: {
            type: DataTypes.STRING,
            validate: {
                isDate: true
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;