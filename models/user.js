const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
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
        },
        client_id: {
            type: DataTypes.INTEGER,
        },
        team_id: {
            type: DataTypes.INTEGER,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Admin', 'Employee', 'Client']],
            },
        },
        is_manager: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        profile_icon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
