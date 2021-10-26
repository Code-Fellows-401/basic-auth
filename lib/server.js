'use strict';

// 3rd Party Resources
const express = require('express');
const invalidUser = require('./auth/middleware/invalid-user');
const signUp = require('./auth/routes/sign-up');
const signIn = require('./auth/routes/sign-in');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Route to sign-up.
app.use(signUp);
app.use(signIn);

// MiddleWare Calls:
// Error call when user info is invalid.
app.use(invalidUser);

// Exports our Express() & sequelize function for spinning our db.
module.exports = {
	app,
	sequelize: (port) => {
		try {
			app.listen(port, () => console.log('Server Running', port));
		} catch (error) {
			console.log(error);
		}
	},
};
