const UserController = require("../../controllers/user_controller");
const passport = require("passport");
const middleware = require('../../middlewares/main');

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/user/",
    passport.authenticate("jwt", { session: false }),
    middleware.isSuperAdministrador, 
    UserController.getAll
  );

  /** Total de usuarios registrados */
  router.get(
    "/user/count",
    passport.authenticate("jwt", { session: false }),
    middleware.isSuperAdministrador, 
    UserController.getUsersCount
  );

  /** Total de usuarios activos */
  router.get(
    "/user/active/count",
    passport.authenticate("jwt", { session: false }),
    middleware.isSuperAdministrador, 
    UserController.getActiveUsersCount
  );

  /** Trae un usuario por email del usuario */
  router.get(
    "/user/email/:email",
    passport.authenticate("jwt", { session: false }),
    UserController.getByEmail
  );

  /** Get all deleted users */
  router.get(
    "/user/deleted",
    passport.authenticate("jwt", { session: false }),
    middleware.isSuperAdministrador, 
    UserController.getDeletedUsers
  );

  /** Trae un usuario por id */
  router.get(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    UserController.getById
  );

  /** Actualiza un usuario por id del usuario */
  router.put(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    middleware.lastSeen,
    UserController.update
  );

  /** Elimina un usuario por id del usuario */
  router.delete(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    middleware.isSuperAdministrador, 
    UserController.deleteById
  );
};
