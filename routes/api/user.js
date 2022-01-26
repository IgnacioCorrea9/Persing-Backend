const UserController = require('../../controllers/user_controller');
const passport = require('passport');
const middleware = require('../../middlewares/main');

module.exports = function (router) {
  /** Get all users */
  router.get(
    '/user/',
    passport.authenticate('jwt', { session: false }),
    UserController.getAll
  );

  /** Get users (consumidor) total count */
  router.get(
    '/user/count',
    passport.authenticate('jwt', { session: false }),
    UserController.getUsersCount
  );

  /** Get active users (consumidor) total count */
  router.get(
    '/user/active/count',
    passport.authenticate('jwt', { session: false }),
    UserController.getActiveUsersCount
  );

  /** Get users demographics stats */
  router.get(
    '/user/demographics',
    passport.authenticate('jwt', { session: false }),
    UserController.getDemographics
  );

  /** Trae un usuario por email del usuario */
  router.get(
    '/user/email/:email',
    passport.authenticate('jwt', { session: false }),
    UserController.getByEmail
  );

  /** Get all deleted users */
  router.get(
    '/user/deleted',
    passport.authenticate('jwt', { session: false }),
    UserController.getDeletedUsers
  );

  /** Get user by id */
  router.get(
    '/user/:id',
    passport.authenticate('jwt', { session: false }),
    UserController.getById
  );

  /** Update user by id */
  router.put(
    '/user/:id',
    passport.authenticate('jwt', { session: false }),
    middleware.lastSeen,
    UserController.update
  );

  /** Delete user by id */
  router.delete(
    '/user/:id',
    passport.authenticate('jwt', { session: false }),
    UserController.deleteById
  );

  /** Disable superadmin */
  router.delete(
    '/admin/:id',
    passport.authenticate('jwt', { session: false }),
    UserController.disableAdminById
  );
};
