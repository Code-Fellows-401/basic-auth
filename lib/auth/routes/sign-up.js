'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Users } = require('../../model');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo

// Add middleware if you want

router.post('/signup', async (req, res) => {
	try {
		let hashedPassword = await bcrypt.hash(req.body.password, 10);
		let userData = req.body;
		const newUser = await Users.create({
			username: userData.username,
			password: hashedPassword,
		});
		res.status(200).send(newUser);
	} catch (e) {
		console.log(e);
		res.status(403).send('Error Creating User');
	}
});

module.exports = router;
