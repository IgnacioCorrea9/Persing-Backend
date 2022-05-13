"use strict";

var Feedback = require("../models/feedback");

exports.create = function (req, res) {
  Feedback.create(req.body, function (err, result) {
    if (!err) {
      res.status(201).json({
        success: true,
        message: "Feedback creado correctamente",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Error al registrar el Feedback",
        data: err,
      });
    }
  });
};

exports.getByUserId = function (req, res) {
  Feedback.getByUserId({ usuario: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getAll = function (req, res) {
  Feedback.getAll({}, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
