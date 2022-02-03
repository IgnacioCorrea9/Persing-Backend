'use strict';

const Notificaciones = require('../models/notificaciones');

/** get function to get pago by id. */
exports.get = function (req, res) {
  Notificaciones.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getEmpresa = function (req, res) {
  Notificaciones.getEmpresa({ empresa: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Producto. */
exports.getAll = function (req, res) {
  Notificaciones.getAll({}, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};

/** update function to update Producto by id. */
exports.update = function (req, res) {
  Notificaciones.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.send({ success: true, error: err }); // 500 error
    }
  });
};

/** update function to update Producto by id. */
exports.create = function (req, res) {
  Notificaciones.create(req.body, function (err, result) {
    if (!err) {
      return res.status(201).json({ success: true, data: result });
    } else {
      return res.status(400).send({ success: false, error: err }); // 500 error
    }
  });
};

/** remove function to remove Producto by id. */
exports.delete = function (req, res) {
  Notificaciones.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
