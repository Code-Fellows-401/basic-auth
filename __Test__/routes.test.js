'use strict';

const app = require('../lib/server');
const supertest = require('supertest');
const request = supertest(app.app);
const { db } = require('../lib/model/index');
const { expect } = require('@jest/globals');

beforeAll(async () => await db.sync());
afterAll(async () => await db.drop());

describe('POST to /signup to create a new user', () => {
	it('should Create a newUser to the DataBase', async () => {
		const response = await request.post('/signup').send({
			username: 'Jake',
			password: 'Bryce',
		});
		expect(response.status).toBe(200);
		expect(response.body.username).toEqual('Jake');
	});
});
describe('POST to /signin to login as a user (use basic auth)', () => {
	it('should POST to signin and validate the the user exists and return the userData', async () => {
		const response = await request.post('/signin').send('Jake:Bryce');
		expect(response.status).toBe(200);
		// expect(response.body.username).toEqual('Jake');
	});
});
