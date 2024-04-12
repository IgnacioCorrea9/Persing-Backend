"use strict";

const Destacado = require("../models/destacado");
const Like = require("../models/like");
const _ = require("lodash");

/** get function to get Destacado by id. */
exports.get = function (req, res) {
  Destacado.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** Gets destacadoes and evaluates for each one if user liked it or saved it and modifies model response.
 * FLiters by name and description if query available
 */
exports.getAllForUser = function (req, res) {
  Destacado.getAll({}, function (err, result) {
    if (!err) {
      const userId = req.params.user;
      result.forEach((element) => {
        var liked = element.likes.includes(userId);
        element._doc["liked"] = liked;
        element._doc["likes"] = element.likes.length;
        const search = req.query.search;
        if (search) {
          result = result.filter(
            (p) =>
              p.titulo.toLowerCase().includes(search) ||
              p.texto.toLowerCase().includes(search)
          );
        }
      });
      result = _.shuffle(result);
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.toggleLike = function (req, res) {
  Destacado.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const userId = req.body.user;
      const type = req.body.type;
      if (result) {
        const arrayLikes = result._doc.likes;
        if (type === "add") {
          if (!arrayLikes.includes(userId)) {
            arrayLikes.push(userId);
          }
        } else {
          const index = arrayLikes.indexOf(userId);
          if (index > -1) {
            arrayLikes.splice(index, 1);
          }
        }
        var toSave = {
          likes: arrayLikes,
        };
        Destacado.updateById(req.params.id, toSave, function (err, result) {
          if (!err) {
            const like = {
              destacado: req.params.id,
              usuario: userId,
            };
            Like.create(like, function (err2, result2) {
              if (!err2) {
                console.log("created like");
                console.log('done');
              }
            });
            return res.json({ success: true, data: result });
          } else {
            return res.status(500).send({ success: false, error: err }); // 500 error
          }
        });
      } else {
        return res.json({ success: true, data: {} });
      }
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** get function to get all Destacado. */
exports.getAll = function (req, res) {
  Destacado.getAll({}, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** get function to get all Destacado. */
exports.getAllBySeccion = function (req, res) {
  Destacado.getAll({ seccion: req.params.seccion }, function (err, result) {
    if (!err) {
      const userId = req.params.user;
      result.forEach((element) => {
        var liked = element.likes.includes(userId);
        element._doc["liked"] = liked;
        element._doc["likes"] = element.likes.length;
        const search = req.query.search;
        if (search) {
          result = result.filter(
            (p) =>
              p.titulo.toLowerCase().includes(search) ||
              p.texto.toLowerCase().includes(search)
          );
        }
      });
      result = _.shuffle(result);
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** update function to update Destacado by id. */
exports.update = function (req, res) {
  Destacado.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** update function to update Destacado by id. */
exports.create = function (req, res) {
  Destacado.create(req.body, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** remove function to remove Destacado by id. */
exports.delete = function (req, res) {
  Destacado.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};
