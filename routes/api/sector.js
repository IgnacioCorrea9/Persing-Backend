const { Router } = require("express");
const passport = require("passport");
const SeccionController = require("../../controllers/seccion_controller");

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get("/seccion", SeccionController.getAll);

  /** Trae todos los usuarios por tipo */
  router.post(
    "/seccion",
    passport.authenticate("jwt", { session: false }), 
    SeccionController.create
  );

  /** Gets seccion by id */
  router.get(
    "/seccion/:id",
    passport.authenticate("jwt", { session: false }), 
    SeccionController.get
  );

  /** Actualiza una seccion por id */
  router.put(
    "/seccion/:id",
    passport.authenticate("jwt", { session: false }), 
    SeccionController.update
  );

  /** Elimina una seccion */
  router.delete(
    "/seccion/:id",
    passport.authenticate("jwt", { session: false }),
    SeccionController.delete
  );
};
