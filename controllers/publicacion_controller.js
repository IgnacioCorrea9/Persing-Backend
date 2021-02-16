"use strict";

const Publicacion = require("../models/publicacion");

/** get function to get Publicacion by id. */
exports.get = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Publicacion. */
exports.getAllLikedUser = function (req, res) {
  Publicacion.getAll({}, function (err, result) {
    if (!err) {
      const userId = req.params.user;
      result.forEach((element) => {
        var liked = element.likes.includes(userId);
        element._doc["liked"] = liked;
        element._doc["likes"] = element.likes.length;
      });
      return res.status(200).json(result);
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};

exports.toggleLike = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const userId = req.body.user;
      const type = req.body.type;
      const arrayLikes = result._doc.likes;
      if (type === "add") {
        if(!arrayLikes.includes(userId)){
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
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json(result);
        } else {
          return res.status(400).send({ error: err }); // 500 error
        }
      });
    } else {
      return res.status(400).send({ error: err }); // 500 error
    }
  });
};


/** get function to get all Publicacion. */
exports.getAll = function (req, res) {
  Publicacion.getAll({}, function (err, result) {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};

/** update function to update Publicacion by id. */
exports.update = function (req, res) {
  Publicacion.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update Publicacion by id. */
exports.create = function (req, res) {
  Publicacion.create(req.body, function (err, result) {
    if (!err) {
      return res.status(201).json({ success: true, data: result });
    } else {
      return res.status(400).send({ success: false, error: err }); // 500 error
    }
  });
};

/** remove function to remove Publicacion by id. */
exports.delete = function (req, res) {
  Publicacion.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
