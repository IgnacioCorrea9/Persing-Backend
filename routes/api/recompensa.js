const { Router } = require("express");
const passport = require("passport");
const RecompensaController = require("../../controllers/recompensa_controller");

module.exports = function (router) {
    /** Trae todos los usuarios por tipo */
    router.get(
      "/recompensa",
      passport.authenticate("jwt", { session: false }),
      RecompensaController.getAll
    );
  
    /** Trae recompensas por usuario */
    router.get(
      "/recompensa/usuario/:usuario",
      passport.authenticate("jwt", { session: false }),
      RecompensaController.getByEmail
    );
  
    /** Gets recompensa by id */
    router.get(
      "/recompensa/:id",
      passport.authenticate("jwt", { session: false }),
      RecompensaController.getById
    );
  
    /** Actualiza una recompensa por id */
    router.put(
      "/recompensa/:id",
      passport.authenticate("jwt", { session: false }),
      RecompensaController.update
    );
  
    /** Elimina una recompensa */
    router.delete(
      "/recompensa/:id",
      passport.authenticate("jwt", { session: false }),
      RecompensaController.delete
    );
  };
  