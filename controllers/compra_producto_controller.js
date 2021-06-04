"use strict";

const CompraProducto = require("../models/compra_producto");
const Producto = require("../models/producto");

/** get function to get CompraProducto by id. */
exports.get = function (req, res) {
  CompraProducto.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get CompraProducto by id. */
exports.getAllByProducto = function (req, res) {
  CompraProducto.getAll(
    { producto: req.params.producto },
    function (err, result) {
      if (!err) {
        return res.status(200).json(result);
      } else {
        return res.status(400).send({ error: err }); // 500 error
      }
    }
  );
};

/** get function to get CompraProducto by id. */
exports.getAllByUser = function (req, res) {
  CompraProducto.getAll(
    { usuario: req.params.usuario },
    function (err, result) {
      if (!err) {
        return res.status(200).json(result);
      } else {
        return res.status(400).send({ error: err }); // 500 error
      }
    }
  );
};

/** get function to get CompraProducto by id. */
exports.create = function (req, res) {
  CompraProducto.create(req.body, function (err, result) {
    if (!err) {
      Producto.updateById(
        req.body.producto,
        { compras: result2._doc.compras + 1 },
        function (err3, result3) {
          if (!err3) {
            return res.status(201).json(result);
          } else {
            return res.status(400).send({ error: err3 }); // 500 error
          }
        }
      );
    } else {
      return res.status(400).send({ error: err }); // 500 error
    }
  });
};

/** get function to get all CompraProducto. */
exports.getAll = function (req, res) {
  CompraProducto.getAll({}, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** update function to update CompraProducto by id. */
exports.update = function (req, res) {
  CompraProducto.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** remove function to remove CompraProducto by id. */
exports.delete = function (req, res) {
  CompraProducto.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};