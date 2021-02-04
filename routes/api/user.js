const UserController = require("../../controllers/user_controller");
const passport = require("passport");

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/user/",
    passport.authenticate("jwt", { session: false }),
    UserController.getAll
  );

  /** Trae un usuario por email del usuario */
  router.get(
    "/user/email/:email",
    passport.authenticate("jwt", { session: false }),
    UserController.getByEmail
  );

  /** Trae los estudiantes de un advisor */
  router.get(
    "/user/advisor/:advisor",
    passport.authenticate("jwt", { session: false }),
    UserController.getByAdvisor
  );

  /** Trae los estudiantes por tipo */
  router.get(
    "/user/tipo/:tipo",
    passport.authenticate("jwt", { session: false }),
    UserController.getAllByTipo
  );

  /** Trae los estudiantes de un advisor */
  router.get(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    UserController.getById
  );

  /** Actualiza un usuario por id del usuario */
  router.put(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    UserController.update
  );

  /** Agrega servicio médico a un usuario */
  router.post(
    "/user/servicio-medico",
    passport.authenticate("jwt", { session: false }),
    UserController.addMedicalService
  );

  /** Elimina un usuario por id del usuario */
  router.delete(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    UserController.delete
  );

  /** Añade un favorito a la lista de favoritos */
  router.post(
    "/user/post-favourite/",
    passport.authenticate("jwt", { session: false }),
    UserController.addFavourite
  );
  /** Elimina un favorito a la lista de favoritos */
  router.post(
    "/user/remove-favourite/",
    passport.authenticate("jwt", { session: false }),
    UserController.deleteFavourite
  );
  /** Obtiene los favoritos de un usuario */
  router.get(
    "/user/favoritos/:id",
    passport.authenticate("jwt", { session: false }),
    UserController.getFavourites
  )
};
