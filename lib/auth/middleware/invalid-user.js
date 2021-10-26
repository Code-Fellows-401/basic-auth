'use strict';

const invalidUser = (err, req, res, next) => {
	res.status(700).send(err);
	res.end();
};

module.exports = invalidUser;
