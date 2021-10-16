"use strict";

const Comentario = require("../models/comentario");
const Publicacion = require("../models/publicacion");
const User = require("../models/user")

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

/** get function to get Comentario by Publicacion. */
exports.getAllByPublicacion = function (req, res) {
  Comentario.getAll(
    { publicacion: req.params.publicacion },
    function (err, result) {
      if (!err) {
        result = result.filter((comentario) => {
          return comentario.usuario && !comentario.usuario.deletedAt
        })
        return res.status(200).json(result);
      } else {
        return res.status(400).send({ error: err }); // 500 error
      }
    }
  );
};

/** get function to count comentarios by publicacion. */
exports.countByPublicacion = function (req, res) {
  Comentario.count({publicacion:req.params.publicacion}, function (err, result) {
    if (!err) {
      return res.status(200).json({data: result});
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get Comentario by id. */
exports.create = function (req, res) {
  Comentario.create(req.body, function (err, result) {
    if (!err) {
      Publicacion.get({ _id: req.body.publicacion }, function (err2, result2) {
        if (!err2) {
          Publicacion.updateById(
            req.body.publicacion,
            { comentarios: result2._doc.comentarios + 1 },
            function (err3, result3) {
              if (!err3) {
                return res.status(201).json(result);
              } else {
                return res.status(400).send({ error: err3 }); // 500 error
              }
            }
          );
        } else {
          return res.status(400).send({ error: er2 }); // 500 error
        }
      });
    } else {
      return res.status(400).send({ error: err }); // 500 error
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
