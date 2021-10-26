'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const UsersModel = require('./users');

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize(DATABASE_URL);

const usersTable = UsersModel(sequelize, DataTypes);

module.exports = {
	db: sequelize,
	Users: usersTable,
};
