"use strict";

const Seccion = require("../models/seccion");

/** get function to get Seccion by id. */
exports.get = function (req, res) {
	Seccion.get({ _id: req.params.id }, function (err, result) {
		if (!err) {
			return res.json(result);
		} else {
			return res.send(err); // 500 error
		}
	});
};

/** get function to get all Seccion. */
exports.getAll = function (req, res) {
	Seccion.getAll({}, function (err, result) {
		if (!err) {
			result.push({ nombre: "nuevos", descripcion: "nuevos" });
			return res.json({ data: result, success: true });
		} else {
			return res.send(err); // 500 error
		}
	});
};

/** update function to update Seccion by id. */
exports.update = function (req, res) {
	Seccion.updateById(req.params.id, req.body, function (err, result) {
		if (!err) {
			return res.json(result);
		} else {
			return res.send(err); // 500 error
		}
	});
};

/** update function to update Seccion by id. */
exports.create = function (req, res) {
	Seccion.create(req.body, function (err, result) {
		if (!err) {
			return res.json({ data: result, success: true });
		} else {
			return res.send(err); // 500 error
		}
	});
};

/** remove function to remove Seccion by id. */
exports.delete = function (req, res) {
	Seccion.removeById({ _id: req.params.id }, function (err, result) {
		if (!err) {
			console.log(result);
			return res.json({ data: result, success: true });
		} else {
			return res.send(err); // 500 error
		}
	});
};
