const UserController = require("../../controllers/user_controller");
const passport = require("passport");

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/user/",
    /* passport.authenticate("jwt", { session: false }), */
    UserController.getAll
  );

  /** Trae un usuario por email del usuario */
  router.get(
    "/user/email/:email",
    /* passport.authenticate("jwt", { session: false }), */
    UserController.getByEmail
  );

  /** Trae los estudiantes de un advisor */
  router.get(
    "/user/:id",
    /* passport.authenticate("jwt", { session: false }), */
    UserController.getById
  );

  /** Actualiza un usuario por id del usuario */
  router.put(
    "/user/:id",
    /* passport.authenticate("jwt", { session: false }), */
    UserController.update
  );

  /** Elimina un usuario por id del usuario */
  router.delete(
    "/user/:id",
    /* passport.authenticate("jwt", { session: false }), */
    UserController.deleteById
  );
};
