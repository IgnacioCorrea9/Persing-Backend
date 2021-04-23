"use strict";

const Compartir = require("../models/compartir");

/** get function to get Compartir by id. */
exports.get = function (req, res) {
  Compartir.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get Compartir by id. */
exports.create = function (req, res) {
  Compartir.create(req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Compartir. */
exports.getAll = function (req, res) {
  Compartir.getAll({}, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to count compartir by publicacion. */
exports.countByPublicacion = function (req, res) {
  Compartir.count({publicacion:req.params.publicacion}, function (err, result) {
    if (!err) {
      return res.status(200).json({data: result});
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update Compartir by id. */
exports.update = function (req, res) {
  Compartir.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** remove function to remove Compartir by id. */
exports.delete = function (req, res) {
  Compartir.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
