"use strict";

var User = require("../models/user");
var Comentario = require("../models/comentario");
var Like = require("../models/like");
var moment = require("moment");

/** get function to get User by id. */
exports.get = function (req, res) {
  User.get({ _id: req.user._id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get User by email. */
exports.getByEmail = function (req, res) {
  User.get({ email: req.params.email }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get User by id. */
exports.getById = function (req, res) {
  User.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};

/** get function to get all User. */
exports.getAll = function (req, res) {
  User.getAll({ deletedAt: { $exists: false } }, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};

/** get count of users consumidores */
exports.getUsersCount = function (req, res) {
  User.getCount(
    { tipo: "consumidor", deletedAt: { $exists: false } },
    function (err, result) {
      if (!err) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(400).send(err);
      }
    }
  );
};

/** Get active users(consumidores): less than 1 month last activity */
exports.getActiveUsersCount = function (req, res) {
  User.getCount(
    {
      tipo: "consumidor",
      deletedAt: { $exists: false },
      lastSeen: { $gte: moment().subtract(1, "month"), $lte: moment() },
    },
    function (err, result) {
      if (!err) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(400).send(err);
      }
    }
  );
};

/**
 * Get user demographics stats (consumidores)
 * */
exports.getDemographics = function (req, res) {
  const data = {
    hijos: {},
    mascotas: {},
    nivelEducativo: {},
    estadoCivil: {},
    genero: {},
    estrato: {},
  };

  User.getAll(
    { deletedAt: { $exists: false }, tipo: "consumidor" },
    function (err, result) {
      if (err) {
        return res.status(400).send(err);
      }

      for (const property in data) {
        [...new Set(result.map((user) => user[property]))].forEach((value) => {
          if (value === undefined) {
            data[property]["noRegistra"] = result.filter(
              (user) => user[property] === value
            ).length;
          } else {
            data[property][value] = result.filter(
              (user) => user[property] === value
            ).length;
          }
        });
      }

      return res.status(200).json({ data });
    }
  );
};

/** get all deleted users */
exports.getDeletedUsers = function (req, res) {
  User.getDeletedUsers(
    { deletedAt: { $exists: true } },
    function (err, result) {
      if (!err) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(400).send(err);
      }
    }
  );
};

/** update function to update User by id. */
exports.update = function (req, res) {
  User.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(400).send({ error: err }); // 500 error
    }
  });
};

/** Disable superadmin */
exports.disableAdminById = function (req, res) {
  const userId = req.params.id;
  User.deleteUserById(
    userId,
    { deletedAt: Date.now() },
    function (err, result) {
      if (!err) {
        return res.status(200).json(result);
      } else {
        return res.status(400).send({ error: err });
      }
    }
  );
};

/** delete function to hide user by id - cascade removal */
exports.deleteById = function (req, res) {
  const userId = req.params.id;
  User.deleteUserById(
    userId,
    { deletedAt: Date.now() },
    function (err, userResult) {
      if (err) {
        return res.send(err);
      }

      /** Add deletedUser true at comentarios collection */
      Comentario.deleteByUserId(
        userId,
        { deletedUser: true },
        function (err, result) {
          if (err) {
            return res.send(err);
          }

          /** Add deletedUser true at likes collection */
          Like.deleteByUserId(
            userId,
            { deletedUser: true },
            function (err, result) {
              if (!err) {
                return res.json(userResult);
              }
              return res.send(err);
            }
          );
        }
      );
    }
  );
};

function getOne(_id) {
  return new Promise((success, error) => {
    User.get({ _id: _id }, function (err, result) {
      if (!err) {
        return success(result);
      } else {
        return error(err);
      }
    });
  });
}

// Exports functions
exports.getOne = getOne;
