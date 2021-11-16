const { Router } = require("express");
const passport = require("passport");
const GuardadoController = require("../../controllers/guardado_controller");
const middleware = require('../../middlewares/main');

module.exports = function (router) {
    
  /** Trae todos los usuarios por tipo */
  router.get(
    "/guardado",
    passport.authenticate("jwt", { session: false }),
    GuardadoController.getAll
  );

  router.get(
    "/guardado/publicacion/:publicacion",
    passport.authenticate("jwt", { session: false }),
    GuardadoController.countByPublicacion
  );

  /** Trae todos los usuarios por tipo */
  router.post(
    "/guardado",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    GuardadoController.create
  );

  /** Gets guardados by id */
  router.get(
    "/guardado/:id",
    passport.authenticate("jwt", { session: false }),
    GuardadoController.get
  );

  /** Actualiza una publicación guardada por id */
  router.put(
    "/guardado/:id",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    GuardadoController.update
  );

  /** Elimina una publicación guardada */
  router.delete(
    "/guardado/:id",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    GuardadoController.delete
  );
};
