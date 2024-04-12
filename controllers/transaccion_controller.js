'use strict';

const Transaccion = require('../models/transaccion');
const emailService = require('../services/email');

exports.create = function (req, res) {
  Transaccion.create(req.body, function (err, result) {
    if (!err) {
      const templateEmail = emailService.templatesEmailEnums.TRANSACCION
      emailService.sendEmail(templateEmail, {})

      res.status(201).json({
        success: true,
        message: 'Transaccion creada correctamente',
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Error al registrar la transaccion',
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
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getById = function (req, res) {
  Transaccion.getById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};
