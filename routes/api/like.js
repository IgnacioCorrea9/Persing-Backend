const { Router } = require("express");
const passport = require("passport");
const LikeController = require("../../controllers/like_controller");
const middleware = require('../../middlewares/main');

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/like",
    passport.authenticate("jwt", { session: false }),
    LikeController.getAll
  );

  router.get(
    "/like/publicacion/:publicacion",
    passport.authenticate("jwt", { session: false }),
    LikeController.countByPublicacion
  );

  /** Trae todos los usuarios por tipo */
  router.post(
    "/like",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    LikeController.create
  );

  /** Gets like by id */
  router.get(
    "/like/:id",
    passport.authenticate("jwt", { session: false }),
    LikeController.get
  );

  /** Actualiza una like por id */
  router.put(
    "/like/:id",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    LikeController.update
  );

  /** Elimina una like */
  router.delete(
    "/like/:id",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    LikeController.delete
  );
};
