const { Router } = require("express");
const passport = require("passport");
const SectorController = require("../../controllers/sector_controller");

module.exports = function (router) {
    /** Trae todos los usuarios por tipo */
    router.get(
      "/sector",
      passport.authenticate("jwt", { session: false }),
      SectorController.getAll
    );
  
    /** Trae todos los usuarios por tipo */
    router.post(
      "/sector",
      passport.authenticate("jwt", { session: false }),
      SectorController.create
    );

    /** Gets sector by id */
    router.get(
      "/sector/:id",
      passport.authenticate("jwt", { session: false }),
      SectorController.get
    );
  
    /** Actualiza una sector por id */
    router.put(
      "/sector/:id",
      passport.authenticate("jwt", { session: false }),
      SectorController.update
    );
  
    /** Elimina una sector */
    router.delete(
      "/sector/:id",
      passport.authenticate("jwt", { session: false }),
      SectorController.delete
    );
  };
  