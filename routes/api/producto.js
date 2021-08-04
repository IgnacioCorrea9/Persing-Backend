const { Router } = require("express");
const passport = require("passport");
const ProductoController = require("../../controllers/producto_controller");

module.exports = function (router) {
	router.get(
		"/producto",
		/* passport.authenticate("jwt", { session: false }), */
		ProductoController.getAll
	);

	router.get(
		"/producto/sector/:sector",
		/* passport.authenticate("jwt", { session: false }), */
		ProductoController.getAllBySector
	);

	router.post(
		"/producto",
		/* passport.authenticate("jwt", { session: false }), */
		ProductoController.create
	);

	/** Gets producto by id */
	router.get(
		"/producto/:id",
		/* passport.authenticate("jwt", { session: false }), */
		ProductoController.get
	);

	router.get(
		"/producto-descuento",
		/* passport.authenticate("jwt", { session: false }), */
		ProductoController.getAllBDescuento
	);

	/** Actualiza una producto por id */
	router.put(
		"/producto/:id",
		/* passport.authenticate("jwt", { session: false }), */
		ProductoController.update
	);

	/** Elimina una producto */
	router.delete(
		"/producto/:id",
		/* passport.authenticate("jwt", { session: false }), */
		ProductoController.delete
	);
};
