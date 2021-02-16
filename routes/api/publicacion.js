const { Router } = require("express");
const passport = require("passport");
const PublicacionController = require("../../controllers/publicacion_controller");

module.exports = function (router) {
    /** Trae todos los usuarios por tipo */
    router.get(
      "/publicacion",
      // passport.authenticate("jwt", { session: false }),
      PublicacionController.getAll
    );

    router.post(
      "/publicacion",
      // passport.authenticate("jwt", { session: false }),
      PublicacionController.create
    );
  
    /** Gets publicacion by id */
    router.get(
      "/publicacion/:id",
      passport.authenticate("jwt", { session: false }),
      PublicacionController.get
    );
  
    /** Actualiza una publicacion por id */
    router.put(
      "/publicacion/:id",
      passport.authenticate("jwt", { session: false }),
      PublicacionController.update
    );
  
    /** Elimina una publicacion */
    router.delete(
      "/publicacion/:id",
      // passport.authenticate("jwt", { session: false }),
      PublicacionController.delete
    );
  };
  