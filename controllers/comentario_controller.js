"use strict";

const Comentario = require("../models/comentario");

/** get function to get Comentario by id. */
exports.get = function (req, res) {
  Comentario.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Comentario. */
exports.getAll = function (req, res) {
  Comentario.getAll({}, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update Comentario by id. */
exports.update = function (req, res) {
  Comentario.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** remove function to remove Comentario by id. */
exports.delete = function (req, res) {
  Comentario.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
