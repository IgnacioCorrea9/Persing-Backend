"use strict";

const Empresa = require("../models/empresa");

/** get function to get Empresa by id. */
exports.get = function (req, res) {
  Empresa.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.send(err); 
    }
  });
};

/** get function to get all Empresa. */
exports.getAll = function (req, res) {
  Empresa.getAll({
    deletedAt: { $exists: false },
    function(err, result) {
      if (!err) {
        return res.status(200).json({ success: true, data: result });
      } else {
        return res.status(400).send({ success: true, error: err });
      }
    },
  });
};

/** get all deleted Empresas */
exports.getDeletedEmpresas = function (req, res) {
  Empresa.getAll({ deletedAt: { $exists: true } }, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(400).send(err);
    }
  });
};

/** update function to update Empresa by id. */
exports.update = function (req, res) {
  Empresa.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).send({ success: false, error: err }); // 500 error
    }
  });
};

/** update function to update Empresa by id. */
exports.create = function (req, res) {
  Empresa.create(req.body, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).send({ error: err }); // 500 error
    }
  });
};

/** remove function to remove Empresa by id. */
exports.delete = function (req, res) {
  Empresa.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};
