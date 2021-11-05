"use strict";

const Like = require("../models/like");

/** get function to get Like by id. */
exports.get = function (req, res) {
  Like.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get Like by id. */
exports.create = function (req, res) {
  Like.create(req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Like. */
exports.getAll = function (req, res) {
  Like.getAll({
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
  Like.count({ publicacion: req.params.publicacion, "deletedUser": { $exists: false } }, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update Like by id. */
exports.update = function (req, res) {
  Like.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** remove function to remove Like by id. */
exports.delete = function (req, res) {
  Like.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
