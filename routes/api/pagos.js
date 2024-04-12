const { Router } = require("express");
const passport = require("passport");
const PagosController = require("../../controllers/pagos_controller");

module.exports = function (router) {
  router.get(
    "/pagos",
    passport.authenticate("jwt", { session: false }),
    PagosController.getAll
  );

  router.post(
    "/pagos",
    passport.authenticate("jwt", { session: false }),
    PagosController.create
  );

  router.get(
    "/pagos/empresa/:id",
    passport.authenticate("jwt", { session: false }),
    PagosController.getEmpresa
  );

  /** Gets pagos by id */
  router.get(
    "/pagos/:id",
    passport.authenticate("jwt", { session: false }),
    PagosController.get
  );

  /** Actualiza una pagos por id */
  router.put(
    "/pagos/:id",
    passport.authenticate("jwt", { session: false }),
    PagosController.update
  );

  /** Elimina una pagos */
  router.delete(
    "/pagos/:id",
    passport.authenticate("jwt", { session: false }),
    PagosController.delete
  );
};
