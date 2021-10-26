'use strict';

const app = require('../lib/server');
const supertest = require('supertest');
const request = supertest(app.app);
