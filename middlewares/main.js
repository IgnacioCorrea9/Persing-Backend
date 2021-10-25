const jwt = require("jsonwebtoken");
const User = require("../models/user");

/** Utils */

const decodedToken = (req) => {
  const [type, token] = req.headers.authorization.split(" ");
  return jwt.decode(token);
}

/** Middlewares */

/** Permisos solo para Superadministrador */
module.exports.isSuperAdministrador = (req, res, next) => {
  const decoded = decodedToken(req);
  console.log(decoded);
  if (decoded.user.tipo && decoded.user.tipo === "superadministrador") {
    return next();
  }
  return res.status(403).send({ statusCode: 403, message: "Forbidden" });
};

/** Permisos para administrador y superadministrador */
module.exports.isAdministrador = (req, res, next) => {
  const decoded = decodedToken(req);
  if (
    decoded.user &&
    (decoded.user.tipo === "administrador" || decode.user.tipo === "superadministrador")
  ) {
    return next();
  }
  return res.status(403).send({ statusCode: 403, message: "Forbidden" });
};

/**  última interacción del usuario --> usuario activo (lastSeen) */
module.exports.lastSeen = (req, res, next) => {
  const decoded = decodedToken(req);
  console.log(decoded);
  const id = decoded.user._id;
  if (decoded.user && decoded.user.tipo !== "consumidor") {
    return next();
  }
  User.updateById(id, { lastSeen: Date.now() }, (err, result) => {
    if (err) {
      return res.send(err);
    }
    return next();
  });
};
