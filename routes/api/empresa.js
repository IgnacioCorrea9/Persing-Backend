const { Router } = require("express");
const passport = require("passport");
const EmpresaController = require("../../controllers/empresa_controller");

module.exports = function (router) {
    /** Trae todos los usuarios por tipo */
    router.get(
      "/empresa",
      passport.authenticate("jwt", { session: false }),
      EmpresaController.getAll
    );
  
    /** Gets empresa by id */
    router.get(
      "/empresa/:id",
      passport.authenticate("jwt", { session: false }),
      EmpresaController.get
    );
  
    /** Actualiza una empresa por id */
    router.put(
      "/empresa/:id",
      passport.authenticate("jwt", { session: false }),
      EmpresaController.update
    );
  
    /** Elimina una empresa */
    router.delete(
      "/empresa/:id",
      passport.authenticate("jwt", { session: false }),
      EmpresaController.delete
    );
  };
  