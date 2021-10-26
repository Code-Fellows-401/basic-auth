'use strict';

const dotenv = require('dotenv').config();
const app = require('./lib/server');
const { db } = require('./lib/model/index');
const { sequelize } = require('./lib/server');
const PORT = process.env.PORT || 3000;

db.sync().then(() => sequelize(PORT));
