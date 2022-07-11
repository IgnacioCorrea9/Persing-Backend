"use strict";

const { response, request, json } = require("express");
const axios = require("axios").default;
const config = require("../config/wompi");
const { validateModelResponse } = require("../helpers/validate_response");

/** function to create transaction. */
const create = async (req, res, next) => {
  //transaction
  const public_key = req.body.public_key;
  delete req.body.public_key;

  try {
    /// let transaction;
    const transaction = await axios({
      url: config.wompi.baseUrl,
      method: "POST",
      headers: {
        Authorization: public_key,
        "Content-Type": "application/json",
        acceptance_token: req.body.acceptance_token,
      },
      data: req.body,
    });

    console.log(transaction.data.data.id);
    console.log(public_key);
    /// This parameters are necessary for the next step in checkTransactionStatusNew
    req.public_key = public_key;
    req.transaction_id = transaction.data.data.id;
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, data: {}, message: "Error al generar el pago" });
  }
};

/**Function in charge of checking the transaction status
 * The reason to create this function is because of Error H12 in Heroku server (you can read more about it here: https://help.heroku.com/AXOSFIXN/why-am-i-getting-h12-request-timeout-errors-in-nodejs)
 * it allows to separate the process of a transaction. Originally it was taking a long time. (more that 30s)
 */
const checkTransactionStatusNew = async (req = request, res = response) => {
  const transactionChecked = await checkTransactionStatus(
    req.transaction_id,
    req.public_key,
    req.body.acceptance_token
  );
  validateModelResponse(
    transactionChecked,
    "Transacción creada con éxito",
    "Error al crear la transacción, verifique su tarjeta de crédito",
    transactionChecked.data,
    res
  );
};

const checkTransactionStatus = async (
  id,
  public_key,
  acceptance_token,
  index = 0
) => {
  return new Promise((resolve, reject) => {
    axios({
      url: config.wompi.baseUrl + "/" + id,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: public_key,
        acceptance_token: acceptance_token,
      },
    }).then(async (res) => {
      await transactionResult(res, resolve, reject);
    });
  });
};

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const getAcceptanceToken = async (url) => {
  try {
    const acceptanceResponse = await axios({
      url: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return acceptanceResponse.data;
  } catch (err) {}
};

const getTokenization = async (data, url, public_key) => {
  try {
    const tokenizationResponse = await axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${public_key}`,
      },
      data: data,
    });
    return tokenizationResponse.data;
  } catch (err) {}
};

const checkTokenizationStatus = async (url, public_key) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${public_key}`,
      },
    }).then(async (res) => {
      try {
        var status = res.data.data.status;
        if (status === "APPROVED") {
          resolve(res.data);
        } else {
          if (status === "DECLINED") {
            reject("declined");
          } else {
            if (status === "PENDING") {
              checkTransactionStatus(id, public_key, acceptance_token);
            } else {
              reject("Error");
            }
          }
        }
      } catch (err) {
        reject("declined");
      }
    });
  });
};

const createGeneralTransaction = async (data, public_key) => {
  try {
    //transaction
    const formatted_pub_key = `Bearer ${public_key}`;
    const genTransaction = await axios({
      url: config.wompi.baseUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: formatted_pub_key,
        acceptance_token: data.acceptance_token,
      },
      data: data,
    });
    const transactionChecked = await checkTransactionStatus(
      genTransaction.data.data.id,
      formatted_pub_key,
      data.acceptance_token
    );
    if (transactionChecked) {
      return transactionChecked.data;
    }
  } catch (err) {}
};

const createPseTransaction = async (req, res) => {
  //transaction
  try {
    const public_key = req.body.public_key;
    delete req.body.public_key;
    console.log(public_key);
    console.log(req.body.acceptance_token);
    const transaction = await axios({
      url: config.wompi.baseUrl,
      method: "POST",
      headers: {
        Authorization: public_key,
        "Content-Type": "application/json",
        acceptance_token: req.body.acceptance_token,
      },
      data: req.body,
    });
    console.log(transaction);
    validateModelResponse(
      transaction,
      "Transacción creada",
      "Error al crear la transacción",
      transaction.data,
      res
    );
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, data: {}, message: "Error al generar el pago" });
  }
};

async function transactionResult(res, resolve, reject) {
  try {
    var status = res.data.data.status;
    console.log(status);
    if (status === "APPROVED") {
      return resolve(res);
    } else {
      if (status === "DECLINED") {
        //Return word recently added
        return resolve(res);
      } else {
        if (status === "PENDING") {
          let newIndex = index;
          newIndex = newIndex + 1;
          if (index < 3) {
            await wait(2000);
            return resolve(
              await checkTransactionStatus(
                id,
                public_key,
                acceptance_token,
                newIndex
              )
            );
          } else {
            return resolve(res);
          }
        } else {
          //Return word recently added
          return resolve(res);
        }
      }
    }
  } catch (err) {
    resolve(res);
  }
}

const nequiTransaction = async (req, res) => {
  try {
    const public_key = config.wompi.publicKey;
    const getAcceptanceTokenUrl = config.wompi.merchants + public_key;
    const { phone_number } = req.body.nequiAccount;
    let { userInformation } = req.body;
    //Get acceptance token
    const merchantInfo = await getAcceptanceToken(getAcceptanceTokenUrl);
    if (!merchantInfo) {
      return res.status(417).json({
        success: false,
        data: {},
        message: "Error al crear el token de aceptación",
      });
    }
    const acceptance_token =
      merchantInfo.data.presigned_acceptance.acceptance_token;
    //Get tokenization in Pending
    const nequiTokenUrl = config.wompi.nequi;
    const tokenizationResponse = await getTokenization(
      req.body.nequiAccount,
      nequiTokenUrl,
      public_key
    );
    if (!tokenizationResponse) {
      return res.status(417).json({
        success: false,
        data: {},
        message: "Error al crear el token de la cuenta",
      });
    }
    //wait for tokenization to approve
    const checkTokenStatusUrl = `${nequiTokenUrl}/${tokenizationResponse.data.id}`;
    const tokenChecked = await checkTokenizationStatus(
      checkTokenStatusUrl,
      public_key
    );
    if (tokenChecked.data.status === "APPROVED") {
      userInformation.acceptance_token = acceptance_token;
      userInformation.payment_method = {
        type: "NEQUI",
        phone_number: phone_number,
        token: tokenChecked.data.id,
      };
      //make transaction
      const newTransaction = await axios({
        url: config.wompi.baseUrl,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${public_key}`,
          acceptance_token: acceptance_token,
        },
        data: userInformation,
      });
      validateModelResponse(
        newTransaction,
        "Transacción creada",
        "Error mientras se crea la transacción",
        newTransaction.data,
        res
      );
      //wait for transaction
    } else {
      return res
        .status(417)
        .status({ success: false, data: {}, message: "Transacción fallida" });
    }
  } catch (err) {
    return res
      .status(417)
      .status({ success: false, data: {}, message: "Proceso fallido" });
  }
};

module.exports = {
  create,
  checkTransactionStatusNew,
  getAcceptanceToken,
  getTokenization,
  checkTokenizationStatus,
  createGeneralTransaction,
  createPseTransaction,
  nequiTransaction,
};
