const passport = require("passport");
const TransaccionController = require("../../controllers/transaccion_controller");

module.exports = function (router) {
  /** Get all transactions */
  router.get(
    "/transaction",
    passport.authenticate("jwt", { session: false }),
    TransaccionController.getAll
  );

  /** Get transactions by userId */
  router.get(
    "/transaction/:id",
    passport.authenticate("jwt", { session: false }),
    TransaccionController.getById
  );

  /** Get transactions by userId */
  router.get(
    "/transaction/user/:id",
    passport.authenticate("jwt", { session: false }),
    TransaccionController.getTransaccionByUser
  );

  /** Post transactions*/
  router.post(
    "/transaction",
    /* passport.authenticate('jwt', { session: false }), */
    TransaccionController.create
  );
};
