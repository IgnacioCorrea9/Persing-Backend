const { Router } = require('express');
const passport = require('passport');
const NotificacionesController = require('../../controllers/notificaciones_controller');

module.exports = function (router) {
  router.get(
    '/notificaciones',
    //passport.authenticate('jwt', { session: false }),
    NotificacionesController.getAll
  );

  router.post(
    '/notificaciones',
    passport.authenticate('jwt', { session: false }),
    NotificacionesController.create
  );

  router.get(
    '/notificaciones/empresa/:id',
    //passport.authenticate('jwt', { session: false }),
    NotificacionesController.getEmpresa
  );

  /** Gets notificaciones by id */
  router.get(
    '/notificaciones/:id',
    passport.authenticate('jwt', { session: false }),
    NotificacionesController.get
  );

  /** Actualiza una notificaciones por id */
  router.put(
    '/notificaciones/:id',
    //passport.authenticate('jwt', { session: false }),
    NotificacionesController.update
  );

  /** Elimina una notificacion */
  router.delete(
    '/notificaciones/:id',
    passport.authenticate('jwt', { session: false }),
    NotificacionesController.delete
  );
};
