"use strict";

const Transaccion = require("../models/transaccion");
const emailService = require("../services/email");
const User = require("../models/user");

exports.create = function (req, res) {
  Transaccion.create(req.body, function (err, result) {
    if (!err) {
      User.get({ _id: req.body.usuario }, function (err, result4) {
        if (!err) {
          historial.create(
            {
              usuario: req.body.usuario,
              accion: "compra",
              creditos: -result4.creditos,
            },
            function (error, resultHistorial) {}
          );

          User.updateById(
            req.body.usuario,
            { creditos: -result4.creditos },
            function (err, resultUsuario) {}
          );
          const templateEmail = emailService.templatesEmailEnums.TRANSACCION;
          emailService.sendEmail(templateEmail, {});

          return res.status(201).json({
            success: true,
            message: "Transaccion creada correctamente",
            data: result,
          });
        } else {
          return res.status(400).send({ error: err });
        }
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
