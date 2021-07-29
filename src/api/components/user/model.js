const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../../../services/dbConnection');

class User extends Model {}

User.init({
    username: DataTypes.STRING(30),
    password: DataTypes.STRING(24),
    firstName: DataTypes.STRING(30),
    lastName: DataTypes.STRING(30),
}, { sequelize, modelName: 'user' });

module.exports = User