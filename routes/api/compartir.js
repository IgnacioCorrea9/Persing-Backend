const { Router } = require("express");
const passport = require("passport");
const CompartirController = require("../../controllers/compartir_controller");

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/compartir",
    passport.authenticate("jwt", { session: false }),
    CompartirController.getAll
  );

  /** Trae todos los usuarios por tipo */
  router.post(
    "/compartir",
    passport.authenticate("jwt", { session: false }), 
    CompartirController.create
  );

  /** Gets compartir by id */
  router.get(
    "/compartir/:id",
    passport.authenticate("jwt", { session: false }), 
    CompartirController.get
  );

  router.get(
    "/compartir/publicacion/:publicacion",
    passport.authenticate("jwt", { session: false }), 
    CompartirController.countByPublicacion
  );

  /** Actualiza una compartir por id */
  router.put(
    "/compartir/:id",
    passport.authenticate("jwt", { session: false }), 
    CompartirController.update
  );

  /** Elimina una compartir */
  router.delete(
    "/compartir/:id",
    passport.authenticate("jwt", { session: false }), 
    CompartirController.delete
  );
};
