const { Router } = require("express");
const passport = require("passport");
const TransactionController = require("../../controllers/transaction_controller");

module.exports = function (router) {
  //* Crear transacción */

  router.post(
    "/transaction",
    TransactionController.create,
    TransactionController.checkTransactionStatusNew
  );

  //* Crear transacción PSE */
  router.post("/transaction/pse", TransactionController.createPseTransaction);

  router.post("/transaction/nequi", TransactionController.nequiTransaction);
};
