"use strict";

const Sector = require("../models/sector");

/** get function to get Sector by id. */
exports.get = function (req, res) {
  Sector.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ data: result, success: true });
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Sector. */
exports.getAll = function (req, res) {
  Sector.getAll({}, function (err, result) {
    if (!err) {
      result["cantidad"] = Number(result.length);
      return res.json({ data: result, success: true });
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update Sector by id. */
exports.update = function (req, res) {
  Sector.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update Sector by id. */
exports.create = function (req, res) {
  Sector.create(req.body, function (err, result) {
    if (!err) {
      return res.status(201).json({ success: true, data: result });
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};

/** remove function to remove Sector by id. */
exports.delete = function (req, res) {
  Sector.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
