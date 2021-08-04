"use strict";

const Producto = require("../models/producto");
const Like = require("../models/like");

/** get function to get Producto by id. */
exports.get = function (req, res) {
	Producto.get({ _id: req.params.id }, function (err, result) {
		if (!err) {
			return res.json({ data: result });
		} else {
			return res.send(err); // 500 error
		}
	});
};

/** get function to get all Producto. */
exports.getAll = function (req, res) {
	Producto.getAll({}, function (err, result) {
		if (!err) {
			return res.json({ success: true, data: result });
		} else {
			return res.status(400).send(err); // 500 error
		}
	});
};

/** get function to get all Producto. */
exports.getAllBySector = function (req, res) {
	Producto.getAll({ sector: req.params.sector }, function (err, result) {
		if (!err) {
			return res.json({ success: true, data: result });
		} else {
			return res.status(400).send(err); // 500 error
		}
	});
};

/** get function to get all Producto en descuento. */
exports.getAllBDescuento = function (req, res) {
	Producto.getAll({ descuento: true }, function (err, result) {
		if (!err) {
			return res.json({ success: true, data: result });
		} else {
			return res.status(400).send(err); // 500 error
		}
	});
};

/** update function to update Producto by id. */
exports.update = function (req, res) {
	Producto.updateById(req.params.id, req.body, function (err, result) {
		if (!err) {
			return res.json({ success: true, data: result });
		} else {
			return res.send({ success: true, error: err }); // 500 error
		}
	});
};

/** update function to update Producto by id. */
exports.create = function (req, res) {
	Producto.create(req.body, function (err, result) {
		if (!err) {
			return res.status(201).json({ success: true, data: result });
		} else {
			return res.status(400).send({ success: false, error: err }); // 500 error
		}
	});
};

/** remove function to remove Producto by id. */
exports.delete = function (req, res) {
	Producto.removeById({ _id: req.params.id }, function (err, result) {
		if (!err) {
			return res.json(result);
		} else {
			return res.send(err); // 500 error
		}
	});
};
