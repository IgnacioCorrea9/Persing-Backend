"use strict";

const Recompensa = require("../models/Recompensa");

/** get function to get Recompensa by id. */
exports.get = function (req, res) {
  Recompensa.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Recompensa. */
exports.getAll = function (req, res) {
    Recompensa.getAll({}, function (err, result) {
      if (!err) {
        return res.json(result);
      } else {
        return res.send(err); // 500 error
      }
    });
  };
  
  /** update function to update Recompensa by id. */
  exports.update = function (req, res) {
      Recompensa.updateById(req.params.id, req.body, function (err, result) {
        if (!err) {
          return res.json(result);
        } else {
          return res.send(err); // 500 error
        }
      });
  };
  
  /** remove function to remove Recompensa by id. */
  exports.delete = function (req, res) {
    Recompensa.removeById({ _id: req.params.id }, function (err, result) {
      if (!err) {
        return res.json(result);
      } else {
        return res.send(err); // 500 error
      }
    });
  };