'use strict';

const Empresa = require('../models/empresa');
const Publicacion = require('../models/publicacion');
const User = require('../models/user');
const moment = require('moment');

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
exports.getAll = async (req, res) => {
  Empresa.getAll({ deletedAt: { $exists: false } }, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).send({ success: true, error: err });
    }
  });
};

/** get empresas count */
exports.getEmpresasCount = function (req, res) {
  Empresa.getCount(
    { estado: 'aprobado', deletedAt: { $exists: false } },
    function (err, result) {
      if (!err) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(400).send(err);
      }
    }
  );
};

/** Get active empresas: 3 months */
exports.getActiveEmpresasCount = function (req, res) {
  Publicacion.getAll(
    {
      deletedAt: { $exists: false },
      createdAt: { $gte: moment().subtract(3, 'months'), $lte: moment() },
    },
    function (err, result) {
      if (err) {
        return res.status(400).send(err);
      }

      const activeEmpresas = [
        ...new Set(result.map((publicacion) => publicacion.empresa._id)),
      ];
      return res.status(200).json({ data: activeEmpresas.length });
    }
  );
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
      return res.status(400).send({ success: false, error: err });
    }
  });
};

/** update function to update Empresa by id. */
exports.create = function (req, res) {
  Empresa.create(req.body, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).send({ error: err });
    }
  });
};

/** remove function to remove/hide Empresa by id */
exports.delete = function (req, res) {
  const empresaId = req.params.id;

  Empresa.removeById(empresaId, function (err, result) {
    if (err) {
      return res.send(err);
    }

    // Remove empresa admin
    User.updateByEmpresa(
      empresaId,
      { deletedAt: Date.now() },
      function (err, result) {
        if (err) {
          return res.send(err);
        }

        // Remove Empresa posts
        Publicacion.updateByEmpresa(
          empresaId,
          { deletedAt: Date.now() },
          function (err, result) {
            if (err) {
              return res.send(err);
            }

            return res.status(200).json({
              success: true,
              message: 'Empresa eliminada correctamente',
            });
          }
        );
      }
    );
  });
};
