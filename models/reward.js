const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reward extends Model { }

Reward.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        reward: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        req_points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        round: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reward',
    }
);

module.exports = Reward;
