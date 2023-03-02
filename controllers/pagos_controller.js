"use strict";

const Pagos = require("../models/pagos");
const User = require("../models/user");
const Publicacion = require("../models/publicacion");
const Recompensa = require("../models/recompensa");
const RecompensaController = require("../controllers/recompensa_controller");
const recompensa = require("../models/recompensa");

/** get function to get pago by id. */
exports.get = function (req, res) {
  Pagos.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getEmpresa = function (req, res) {
  Pagos.getEmpresa({ empresa: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

/** get function to get all Pagos. */
exports.getAll = function (req, res) {
  Pagos.getAll({}, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(400).send(err); // 500 error
    }
  });
};

/** update function to update Producto by id. */
exports.update = function (req, res) {
  Pagos.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.send({ success: true, error: err }); // 500 error
    }
  });
};

/** update function to update Producto by id. */
exports.create = function (req, res) {
  Pagos.create(req.body, async function (err, result) {
    await Publicacion.get(
      { _id: req.body.publicacion },
      async function (err, resultPost) {
        const sector = resultPost.sector._id;
        await User.getAll(
          { tipo: "consumidor", intereses: sector },
          async function (err, usersResult) {
            let inversionUsuariosSuperAlto = 0;
            let inversionUsuariosAlto = 0;
            let inversionUsuariosMedio = 0;
            let inversionUsuariosBajo = 0;
            let inversionUsuariosPrincipiante = 0;

            for (const i in req.body.porcentajes) {
              if (req.body.porcentajes[i].rango == "Super Alto") {
                inversionUsuariosSuperAlto = Math.floor(
                  req.body.porcentajes[i].valor / 700
                );
              } else if (req.body.porcentajes[i].rango == "Alto") {
                inversionUsuariosAlto = Math.floor(
                  req.body.porcentajes[i].valor / 550
                );
              } else if (req.body.porcentajes[i].rango == "Medio") {
                inversionUsuariosMedio = Math.floor(
                  req.body.porcentajes[i].valor / 400
                );
              } else if (req.body.porcentajes[i].rango == "Bajo") {
                inversionUsuariosBajo = Math.floor(
                  req.body.porcentajes[i].valor / 250
                );
              } else if (req.body.porcentajes[i].rango == "Principiante") {
                inversionUsuariosPrincipiante = Math.floor(
                  req.body.porcentajes[i].valor / 100
                );
              }
            }

            let shuffleUsuariosSuperAlto = [];

            let shuffleUsuariosAlto = [];

            let shuffleUsuariosMedio = [];

            let shuffleUsuariosBajo = [];

            let shuffleUsuariosPrincipiante = [];

            const promises = [];

            for (const i in usersResult) {
              promises.push(
                new Promise((resolve) => {
                  Recompensa.get(
                    { sector: sector, usuario: usersResult[i]._id },
                    function (err, recompensaResult) {
                      if (!err) {
                        if (recompensaResult == null) {
                          shuffleUsuariosPrincipiante.push(usersResult[i]);
                        } else {
                          let currentRank = recompensaResult.ranking;

                          if (currentRank >= 0 && currentRank <= 2.99) {
                            shuffleUsuariosPrincipiante.push(usersResult[i]);
                          } else if (currentRank >= 3 && currentRank <= 4.99) {
                            shuffleUsuariosBajo.push(usersResult[i]);
                          } else if (currentRank >= 5 && currentRank <= 6.99) {
                            shuffleUsuariosMedio.push(usersResult[i]);
                          } else if (currentRank >= 7 && currentRank <= 8.99) {
                            shuffleUsuariosAlto.push(usersResult[i]);
                          } else if (currentRank >= 9 && currentRank <= 10) {
                            shuffleUsuariosSuperAlto.push(usersResult[i]);
                          }
                        }
                      }
                      resolve({});
                    }
                  );
                })
              );
            }

            Promise.all(promises).then((_) => {
              shuffleUsuariosPrincipiante = shuffleUsuariosPrincipiante
                .sort(() => 0.5 - crypto.getRandomValues())
                .slice(0, inversionUsuariosPrincipiante);

              shuffleUsuariosBajo = shuffleUsuariosBajo
                .sort(() => 0.5 - crypto.getRandomValues())
                .slice(0, inversionUsuariosBajo);

              shuffleUsuariosMedio = shuffleUsuariosMedio
                .sort(() => 0.5 - crypto.getRandomValues())
                .slice(0, inversionUsuariosMedio);

              shuffleUsuariosAlto = shuffleUsuariosAlto
                .sort(() => 0.5 - crypto.getRandomValues())
                .slice(0, inversionUsuariosAlto);

              shuffleUsuariosSuperAlto = shuffleUsuariosSuperAlto
                .sort(() => 0.5 - crypto.getRandomValues())
                .slice(0, inversionUsuariosSuperAlto);

              let allShuffledUsers = [].concat(
                shuffleUsuariosSuperAlto,
                shuffleUsuariosAlto,
                shuffleUsuariosMedio,
                shuffleUsuariosBajo,
                shuffleUsuariosPrincipiante
              );

              for (const i in allShuffledUsers) {
                Recompensa.get(
                  { sector: sector, usuario: allShuffledUsers[i]._id },
                  async function (err, shuffledRecompensaResult) {
                    if (!err) {
                      if (shuffledRecompensaResult == null) {
                        await createRecompensa({
                          user: allShuffledUsers[i]._id,
                          sector: sector,
                          creditos: 100,
                        });
                      } else {
                        let currentRank = shuffledRecompensaResult.ranking;

                        let updateCreditos = 0;

                        if (currentRank >= 0 && currentRank <= 2.99) {
                          updateCreditos =
                            shuffledRecompensaResult.creditos + 100;

                          await Recompensa.updateById(
                            shuffledRecompensaResult._id,
                            { creditos: updateCreditos },
                            function (error, resultRecompensa) {}
                          );
                        } else if (currentRank >= 3 && currentRank <= 4.99) {
                          updateCreditos =
                            shuffledRecompensaResult.creditos + 250;

                          await Recompensa.updateById(
                            shuffledRecompensaResult._id,
                            { creditos: updateCreditos },
                            function (error, resultRecompensa) {}
                          );
                        } else if (currentRank >= 5 && currentRank <= 6.99) {
                          updateCreditos =
                            shuffledRecompensaResult.creditos + 400;

                          await Recompensa.updateById(
                            shuffledRecompensaResult._id,
                            { creditos: updateCreditos },
                            function (error, resultRecompensa) {}
                          );
                        } else if (currentRank >= 7 && currentRank <= 8.99) {
                          updateCreditos =
                            shuffledRecompensaResult.creditos + 550;

                          await Recompensa.updateById(
                            shuffledRecompensaResult._id,
                            { creditos: updateCreditos },
                            function (error, resultRecompensa) {}
                          );
                        } else if (currentRank >= 9 && currentRank <= 10) {
                          updateCreditos =
                            shuffledRecompensaResult.creditos + 700;

                          await Recompensa.updateById(
                            shuffledRecompensaResult._id,
                            { creditos: updateCreditos },
                            function (error, resultRecompensa) {}
                          );
                        }
                      }
                    }
                  }
                );
              }
            });
          }
        );

        if (!err) {
          return;
        }
      }
    );

    if (!err) {
      return res.status(201).json({ success: true, data: result });
    } else {
      return res.status(400).send({ success: false, error: err }); // 500 error
    }
  });
};

function createRecompensa({ user, sector }) {
  return new Promise((success, error) => {
    Recompensa.create(
      {
        usuario: user,
        sector: sector,
        ranking: 0,
        creditos: 0,
      },
      function (err3, result3) {
        if (!err3) {
          return success(result3);
        } else {
          return error(err3);
        }
      }
    );
  });
}

/** remove function to remove Producto by id. */
exports.delete = function (req, res) {
  Pagos.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};
