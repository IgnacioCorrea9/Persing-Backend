"use strict";

const Guardado = require("../models/guardado");

/** get function to get Like by id. */
exports.get = function (req, res) {
  Guardado.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get Like by id. */
exports.create = function (req, res) {
    Guardado.create(req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Like. */
exports.getAll = function (req, res) {
    Guardado.getAll({
    "deletedUser": { $exists: false }}, function(err, result) {
      if (!err) {
        return res.json(result);
      } else {
        return res.send(err); // 500 error
      }
    });
};

/** get function to get all Like. */
exports.countByPublicacion = function (req, res) {
    Guardado.count({ publicacion: req.params.publicacion, "deletedUser": { $exists: false } }, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update Like by id. */
exports.update = function (req, res) {
    Guardado.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** remove function to remove Like by id. */
exports.delete = function (req, res) {
    Guardado.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
