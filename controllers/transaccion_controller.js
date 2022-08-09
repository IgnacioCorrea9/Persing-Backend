"use strict";

var Transaccion = require("../models/transaccion");
const sendGridCredentials = require("../config/sendgrid");
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(sendGridCredentials.apiKey);

exports.create = function (req, res) {
  Transaccion.create(req.body, function (err, result) {
    if (!err) {
      res.status(201).json({
        success: true,
        message: "Transaccion creada correctamente",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Error al registrar la transaccion",
        data: err,
      });
    }
  });
};

exports.getTransaccionByUser = function (req, res) {
  Transaccion.getByUserId({ usuario: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getAll = function (req, res) {
  Transaccion.getAll({}, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
