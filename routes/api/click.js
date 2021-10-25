const { Router } = require("express");
const passport = require("passport");
const ClickController = require("../../controllers/click_controller");

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/click",
    passport.authenticate("jwt", { session: false }), 
    ClickController.getAll
  );

  /** Gets click by id */
  router.get(
    "/click/:id",
    passport.authenticate("jwt", { session: false }), 
    ClickController.get
  );

  router.get(
    "/click/publicacion/:publicacion",
    passport.authenticate("jwt", { session: false }),
    ClickController.countByPublicacion
  );

  /** Actualiza una click por id */
  router.put(
    "/click/:id",
    passport.authenticate("jwt", { session: false }),
    ClickController.update
  );

  /** Elimina una click */
  router.delete(
    "/click/:id",
    passport.authenticate("jwt", { session: false }),
    ClickController.delete
  );
};
