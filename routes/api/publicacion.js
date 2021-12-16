const { Router } = require("express");
const passport = require("passport");
const PublicacionController = require("../../controllers/publicacion_controller");

module.exports = function (router) {
  /** Trae todos los usuarios por tipo */
  router.get(
    "/publicacion/user/:user",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAllForUser
  );

  router.get(
    "/publicacion/destacadas/user/:user",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAllDestacadasForUser
  );

  router.get(
    "/publicacion/destacadas",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAllDestacadas
  );

  router.get(
    "/publicacion",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAll
  );

  router.get(
    "/publicacion/empresa/:empresa/usuario/:user",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAllByEmpresaAndUser
  );

  router.get(
    "/publicacion/empresa/:empresa",
    passport.authenticate("jwt", { session: false }),
    PublicacionController.getAllByEmpresa
  );

  router.get(
    "/publicacion/sector/:sector/:user",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAllBySector
  );

  router.get(
    "/publicacion/guardado/:user",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAllSavedByUser
  );

  router.put(
    "/publicacion/toggle-like/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.toggleLike
  );

  router.put(
    "/publicacion/add-view/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.addView
  );

  router.put(
    "/publicacion/interaction/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.interacted
  );

  router.put(
    "/publicacion/engagement/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.engagement
  );

  router.put(
    "/publicacion/ctr-calculation/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.ctrCalculation
  );

  router.put(
    "/publicacion/cpm-calculation/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.cpmCalculation
  );

  router.put(
    "/publicacion/cpc-calculation/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.cpcCalculation
  );

  router.put(
    "/publicacion/vtr-calculation/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.vtrCalculation
  );

  router.put(
    "/publicacion/ad-clicked/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.linkClicked
  );

  router.put(
    "/publicacion/ignored/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.ignoredPost
  );

  router.put(
    "/publicacion/toggle-save/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.toggleSave
  );

  router.post(
    "/publicacion",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.create
  );

  /** Gets publicacion by id */
  router.get(
    "/publicacion/:id",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.get
  );

  router.get(
    "/publicacion-nuevas",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getAllNuevas
  );

  router.get(
    "/publicacion-nuevas/user/:user",
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.getNuevasByUser
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
    passport.authenticate("jwt", { session: false }), 
    PublicacionController.delete
  );
};
