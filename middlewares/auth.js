const jwt = require("jsonwebtoken");

// Permisos solo para Superadministrador
module.exports.isSuperAdministrador = (req, res, next) => {
  const [type, token] = req.headers.authorization.split(" ");
  const decoded = jwt.decode(token);

  if (decoded.user.tipo && decoded.user.tipo === "superadministrador") {
    next();
  } else {
    return res.status(403).send({ statusCode: 403, message: "Forbidden" });
  }
};

// Permisos para administrador y superadministrador
module.exports.isAdministrador = (req, res, next) => {
  const [type, token] = req.headers.authorization.split(" ");
  const decoded = jwt.decode(token);

  if (
    decoded.tipo &&
    (decoded.tipo === "administrador" || decode.tipo === "superadministrador")
  ) {
    next();
  } else {
    return res.status(403).send({ statusCode: 403, message: "Forbidden" });
  }
};
