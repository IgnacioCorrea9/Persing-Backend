const { Router } = require("express");
const passport = require("passport");
const PublicacionController = require("../../controllers/destacado_controller");

module.exports = function (router) {
	/** Trae todos los usuarios por tipo */
	router.get(
		"/destacado/user/:user",
		passport.authenticate("jwt", { session: false }), 
		PublicacionController.getAllForUser
	);

	router.get(
		"/destacado",
		passport.authenticate("jwt", { session: false }),
		PublicacionController.getAll
	);

	router.get(
		"/destacado/seccion/:seccion/usuario/:user",
		passport.authenticate("jwt", { session: false }), 
		PublicacionController.getAllBySeccion
	);

	router.put(
		"/destacado/toggle-like/:id",
		passport.authenticate("jwt", { session: false }), 
		PublicacionController.toggleLike
	);

	router.post(
		"/destacado",
		passport.authenticate("jwt", { session: false }), 
		PublicacionController.create
	);

	/** Gets destacado by id */
	router.get(
		"/destacado/:id",
		passport.authenticate("jwt", { session: false }), 
		PublicacionController.get
	);

	/** Actualiza una destacado por id */
	router.put(
		"/destacado/:id",
		passport.authenticate("jwt", { session: false }), 
		PublicacionController.update
	);

	/** Elimina una destacado */
	router.delete(
		"/destacado/:id",
		passport.authenticate("jwt", { session: false }), 
		PublicacionController.delete
	);
};
