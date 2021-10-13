"use strict";

var User = require("../models/user");

/** get function to get User by id. */
exports.get = function (req, res) {
	User.get({ _id: req.user._id }, function (err, result) {
		if (!err) {

			return res.json(result);
		} else {
			return res.send(err); // 500 error
		}
	});
};

/** get function to get User by email. */
exports.getByEmail = function (req, res) {
	User.get({ email: req.params.email }, function (err, result) {
		if (!err) {
			return res.json(result);
		} else {
			return res.send(err); // 500 error
		}
	});
};

/** get function to get User by id. */
exports.getById = function (req, res) {
	User.get({ _id: req.params.id }, function (err, result) {
		if (!err) {
			return res.status(200).json({ data: result });
		} else {
			return res.status(400).send(err); // 500 error
		}
	});
};

/** get function to get all User. */
exports.getAll = function (req, res) {
	User.getAll({ "deletedAt": { $exists: false } }, function (err, result) {
		if (!err) {
			return res.status(200).json({ data: result });
		} else {
			return res.status(400).send(err); // 500 error
		}
	});
};

/** update function to update User by id. */
exports.update = function (req, res) {
	User.updateById(req.params.id, req.body, function (err, result) {
		if (!err) {
			return res.status(200).json(result);
		} else {
			return res.status(400).send({ error: err }); // 500 error
		}
	});
};

/** delete function to hide user by id */
exports.deleteById = function (req, res) {
	User.deleteUserById(req.params.id, { deletedAt: Date.now() }, function (err, result) {
		if (!err) {
			return res.json(result);
		} else {
			return res.send(err); // 500 error
		}
	});
};

function getOne(_id) {
	return new Promise((success, error) => {
		User.get({ _id: _id }, function (err, result) {
			if (!err) {
				return success(result);
			} else {
				return error(err); // 500 error
			}
		});
	});
}

// Exports functions
exports.getOne = getOne;
