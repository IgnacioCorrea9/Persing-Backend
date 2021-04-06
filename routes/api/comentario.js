const { Router } = require("express");
const passport = require("passport");
const ComentarioController = require("../../controllers/comentario_controller");

module.exports = function (router) {
    /** Trae todos los usuarios por tipo */
    router.get(
      "/comentario",
      passport.authenticate("jwt", { session: false }),
      ComentarioController.getAll
    );

    /** Trae todos los usuarios por tipo */
    router.get(
      "/comentario/publicacion/:publicacion",
      passport.authenticate("jwt", { session: false }),
      ComentarioController.getAllByPublicacion
    );
  
    /** Gets comentario by id */
    router.get(
      "/comentario/:id",
      passport.authenticate("jwt", { session: false }),
      ComentarioController.get
    );

    /** Gets comentario by id */
    router.post(
      "/comentario",
      passport.authenticate("jwt", { session: false }),
      ComentarioController.create
    );
  
    /** Actualiza una comentario por id */
    router.put(
      "/comentario/:id",
      passport.authenticate("jwt", { session: false }),
      ComentarioController.update
    );
  
    /** Elimina una comentario */
    router.delete(
      "/comentario/:id",
      passport.authenticate("jwt", { session: false }),
      ComentarioController.delete
    );
  };
  