const { Router } = require("express");
const passport = require("passport");
const ComentarioController = require("../../controllers/comentario_controller");
const middleware = require('../../middlewares/main');

module.exports = function (router) {
  /** Get all comentarios */
  router.get(
    "/comentario",
    passport.authenticate("jwt", { session: false }), 
    ComentarioController.getAll
  );

  /** Get all comentarios by id de publicacion */
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

  router.get(
    "/comentario/publicacion-contar/:publicacion",
    passport.authenticate("jwt", { session: false }), 
    ComentarioController.countByPublicacion
  );

  /** Gets comentario by id */
  router.post(
    "/comentario",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    ComentarioController.create
  );

  /** Actualiza una comentario por id */
  router.put(
    "/comentario/:id",
    passport.authenticate("jwt", { session: false }), 
    middleware.lastSeen,
    ComentarioController.update
  );

  /** Elimina un comentario */
  router.delete(
    "/comentario/:id",
    passport.authenticate("jwt", { session: false }), 
    middleware.lastSeen,
    ComentarioController.delete
  );
};
