const { Router } = require("express");
const passport = require("passport");
const LikeController = require("../../controllers/like_controller");

module.exports = function (router) {
    /** Trae todos los usuarios por tipo */
    router.get(
      "/like",
      passport.authenticate("jwt", { session: false }),
      LikeController.getAll
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
      LikeController.update
    );
  
    /** Elimina una like */
    router.delete(
      "/like/:id",
      passport.authenticate("jwt", { session: false }),
      LikeController.delete
    );
  };
  