const { Router } = require("express");
const passport = require("passport");
const RecompensaController = require("../../controllers/recompensa_controller");

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/recompensa",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.getAll
  );

  /** Trae todos los usuarios por tipo */
  router.post(
    "/recompensa",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.create
  );

  /** Trae todos los usuarios por tipo */
  router.post(
    "/recompensa/watch-time",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.sumWatchTime
  );

  router.post(
    "/recompensa/interaction",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.sumInteractions
  );

  /** Trae recompensas por usuario */
  router.get(
    "/recompensa/user/:usuario",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.getByUsuario
  );

  /** Gets recompensa by id */
  router.get(
    "/recompensa/:id",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.get
  );

  /** Actualiza una recompensa por id */
  router.put(
    "/recompensa/:id",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.update
  );

  /** Elimina una recompensa */
  router.delete(
    "/recompensa/:id",
    /* passport.authenticate("jwt", { session: false }), */
    RecompensaController.delete
  );
};
