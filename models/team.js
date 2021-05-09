const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        org_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'org',
            //     key: 'id',
            // },
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'user',
            //     key: 'id',
            // },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'team',
    }
);

module.exports = Team;
