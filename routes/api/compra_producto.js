const { Router } = require("express");
const passport = require("passport");
const CompraProductoController = require("../../controllers/compra_producto_controller");

module.exports = function (router) {
  router.get(
    "/compra-producto",
    passport.authenticate("jwt", { session: false }),
    CompraProductoController.getAll
  );

  router.get(
    "/compra-producto/usuario/:usuario",
    passport.authenticate("jwt", { session: false }),
    CompraProductoController.getAllByUser
  );

  router.get(
    "/compra-producto/producto/:producto",
    passport.authenticate("jwt", { session: false }),
    CompraProductoController.getAllByProducto
  );

  router.post(
    "/compra-producto",
    passport.authenticate("jwt", { session: false }),
    CompraProductoController.create
  );

  /** Gets compra-producto by id */
  router.get(
    "/compra-producto/:id",
    passport.authenticate("jwt", { session: false }),
    CompraProductoController.get
  );

  /** Actualiza una compra-producto por id */
  router.put(
    "/compra-producto/:id",
    passport.authenticate("jwt", { session: false }),
    CompraProductoController.update
  );

  /** Elimina una compra-producto */
  router.delete(
    "/compra-producto/:id",
    passport.authenticate("jwt", { session: false }),
    CompraProductoController.delete
  );
};
