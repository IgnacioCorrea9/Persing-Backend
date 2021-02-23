"use strict";

const Recompensa = require("../models/Recompensa");

const viewsValues = [
  ["na"          , "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["0-2.99"      , 0.2     , 0       , 0       , 0       , 0     ],
  ["3-5.99"      , 0.4     , 0.2     , 0       , 0       , 0     ],
  ["6-9.99"      , 0.6     , 0.4     , 0.2     , 0       , 0     ],
  ["10-14.99"    , 0.8     , 0.6     , 0.4     , 0.2     , 0     ],
  ["15-19.99"    , 1.0     , 0.8     , 0.6     , 0.4     , 0.2   ],
  ["20-29.99"    , 1.2     , 1.0     , 0.8     , 0.6     , 0.4   ],
  ["30-100000000", 1.5     , 1.2     , 1.0     , 0.8     , 0.6   ],
];

const likeValues = [
  ["na"   , "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["like" , 0.3     , 0.2     , 0.1     , 0       , 0     ]
];

const shareValues = [
  ["na"   , "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["share", 1.5     , 1.2     , 1.0     , 0.8     , 0.6   ]
];

const commentValues = [
  ["na"     , "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["comment", 0.6     , 0.4     , 0.2     , 0       , 0     ]
];

const clickValues = [
  ["na"   , "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["click", 1.2    , 1.0     , 0.8     , 0.6       , 0.4  ]
];

const saveValues = [
  ["na"  , "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["save", 1.0     , 0.8     , 0.6     , 0.4     , 0.2   ]
];

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

/** get function to get Recompensa by id. */
exports.getByUsuario = function (req, res) {
  Recompensa.getAll({ usuario: req.params.usuario }, function (err, result) {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(400).send({ error: err }); // 500 error
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

/** Creates function to update Recompensa by id. */
exports.create = function (req, res) {
  Recompensa.create(req.body, function (err, result) {
    if (!err) {
      return res.status(201).json(result);
    } else {
      return res.status(400).send({ error: err }); // 500 error
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
