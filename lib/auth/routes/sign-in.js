'use strict';

const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
// const { Users } = require('../../model');
// const base64 = require('base-64');
// const bcrypt = require('bcrypt');

// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', validate, async (req, res) => {
	/*
    req.headers.authorization is : "Basic sdkjdsljd="
    To get username and password from this, take the following steps:
      - Turn that string into an array by splitting on ' '
      - Pop off the last value
      - Decode that encoded string so it returns to user:pass
      - Split on ':' to turn it into an array
      - Pull username and password from that array
  */

	// let userQuery = await Users.findOne({ where: { username: username } });
	res.status(200).send(req.user);
});

module.exports = router;
