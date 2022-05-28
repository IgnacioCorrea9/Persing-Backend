"use strict";

const Recompensa = require("../models/recompensa");
const User = require("../models/user");
const Save = require("../models/save");
const Publicacion = require("../models/publicacion");
var _ = require("lodash");

const viewsValues = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["0-2.99", 0.2, 0, 0, 0, 0],
  ["3-5.99", 0.4, 0.2, 0, 0, 0],
  ["6-9.99", 0.6, 0.4, 0.2, 0, 0],
  ["10-14.99", 0.8, 0.6, 0.4, 0.2, 0],
  ["15-19.99", 1.0, 0.8, 0.6, 0.4, 0.2],
  ["20-29.99", 1.2, 1.0, 0.8, 0.6, 0.4],
  ["30-100000000", 1.5, 1.2, 1.0, 0.8, 0.6],
];

const likeValues = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["like", 0.3, 0.2, 0.1, 0, 0],
];

const shareValues = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["share", 1.5, 1.2, 1.0, 0.8, 0.6],
];

const commentValues = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["comment", 0.6, 0.4, 0.2, 0, 0],
];

const clickValues = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["click", 1.2, 1.0, 0.8, 0.6, 0.4],
];

const saveValues = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["save", 1.0, 0.8, 0.6, 0.4, 0.2],
];

const viewsValuesCreditos = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["0-2.99", 20, 0, 0, 0, 0],
  ["3-5.99", 40, 20, 0, 0, 0],
  ["6-9.99", 60, 40, 20, 0, 0],
  ["10-14.99", 80, 60, 40, 20, 0],
  ["15-19.99", 100, 80, 60, 40, 20],
  ["20-29.99", 120, 100, 80, 60, 40],
  ["30-100000000", 150, 120, 100, 80, 60],
];

const likeValuesCreditos = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["like", 20, 0, 0, 0, 0],
];

const shareValuesCreditos = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["share", 150, 120, 100, 80, 60],
];

const commentValuesCreditos = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["comment", 60, 40, 20, 0, 0],
];

const clickValuesCreditos = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["click", 120, 100, 80, 60, 40],
];

const saveValuesCreditos = [
  ["na", "0-2.99", "3-4.99", "5-6.99", "7-8.99", "9-10"],
  ["save", 100, 80, 60, 40, 20],
];

/** get function to get Recompensa by id. */
exports.get = function (req, res) {
  Recompensa.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

function getEarningsFromInteraction(factor, currentRank, totalRank) {
  return (
    currentRank +
    factor * (totalRank / 30 - (totalRank / 3000) * Math.pow(currentRank, 2))
  );
}

exports.sumInteractions = function (req, res) {
  Recompensa.get(
    { usuario: req.body.usuario, sector: req.body.sector },
    async function (err2, result2) {
      if (!err2) {
        var recompensa = result2;
        var nombreSector = result2.sector.nombre;
        if (result2 == null || result2 == undefined || result2 == {}) {
          await Recompensa.create(
            {
              usuario: req.body.usuario,
              sector: req.body.sector,
              ranking: 0,
              creditos: 0,
            },
            function (err3, result3) {
              if (!err3) {
                recompensa = result3;
              }
            }
          );
        }
        let currentRank = recompensa.ranking;
        let currentCreditos = recompensa.creditos;
        let interaccion = req.body.interaccion;
        var points;
        var credits;

        switch (interaccion) {
          case "dislike":
          case "disguardar":
            let dynamicValues =
              "dislike" === interaccion ? likeValues : saveValues;
            let dynamicValuesCredits =
              "dislike" === interaccion
                ? likeValuesCreditos
                : saveValuesCreditos;

            for (var i = 1; i < dynamicValues[0].length; i++) {
              var split = dynamicValues[0][i].split("-");

              let lower = parseFloat(split[0]);

              let higher = parseFloat(split[1]);

              if (currentRank >= lower && currentRank <= higher) {
                points = dynamicValues[1][i];
                break;
              }
            }
            let newRankRecompensa = getEarningsFromInteraction(
              points,
              currentRank,
              recompensa.usuario.calificacionApp || 1
            ).toFixed(2);

            let total = recompensa.usuario.creditos - credits;
            if (newRankRecompensa > 10) {
              newRankRecompensa = 10;
            }
            if (newRankRecompensa < 0) {
              newRankRecompensa = 0;
            }
            if (newCreditos < 0) {
              newCreditos = 0;
            }
            if (total < 0) {
              total = 0;
            }
            Recompensa.updateById(
              recompensa._id,
              { ranking: newRankRecompensa, creditos: newCreditos },
              await function (error, resultRecompensa) {}
            );
            User.updateById(
              recompensa.usuario._id,
              { creditos: total },
              await function (err, resultUsuario) {}
            );
            return res.status(200).json("saved interaction");
          case "like":
            for (var i = 1; i < likeValues[0].length; i++) {
              var split = likeValues[0][i].split("-");
              let lower = parseFloat(split[0]);
              let higher = parseFloat(split[1]);
              if (currentRank >= lower && currentRank <= higher) {
                points = likeValues[1][i];
                break;
              }
            }
            break;
          case "comentario":
            for (var i = 1; i < commentValues[0].length; i++) {
              var split = commentValues[0][i].split("-");
              let lower = parseFloat(split[0]);
              let higher = parseFloat(split[1]);
              if (currentRank >= lower && currentRank <= higher) {
                points = commentValues[1][i];
                break;
              }
            }
            break;
          case "guardar":
            const notRewardedItems = await Save.getOne({
              alreadyRewarded: false,
            });

            if (notRewardedItems === null) {
              points = 0;
              credits = 0;
              break;
            }

            await Save.updateSave(
              { alreadyRewarded: false },
              { alreadyRewarded: true }
            );

            for (var i = 1; i < saveValues[0].length; i++) {
              var split = saveValues[0][i].split("-");
              let lower = parseFloat(split[0]);
              let higher = parseFloat(split[1]);
              if (currentRank >= lower && currentRank <= higher) {
                points = saveValues[1][i];
                break;
              }
            }

            break;
          case "compartir":
            for (var i = 1; i < shareValues[0].length; i++) {
              var split = shareValues[0][i].split("-");

              let lower = parseFloat(split[0]);

              let higher = parseFloat(split[1]);

              if (currentRank >= lower && currentRank <= higher) {
                points = shareValues[1][i];
                break;
              }
            }
            break;
        }

        let newRankRecompensa = getEarningsFromInteraction(
          points,
          currentRank,
          recompensa.usuario.calificacionApp || 1
        ).toFixed(2);
        if (newRankRecompensa > 10) {
          newRankRecompensa = 10;
        }
        if (newRankRecompensa < 0) {
          newRankRecompensa = 0;
        }
        Recompensa.updateById(
          recompensa._id,
          { ranking: newRankRecompensa },
          await function (error, resultRecompensa) {
            return res.status(200).json(resultRecompensa);
          }
        );
      } else {
        return res.status(400).send({ error: err });
      }
    }
  );
};

exports.valorUpdate = function (req, res) {
  Recompensa.get(
    { usuario: req.body.usuario, sector: req.body.sector },
    async function (err2, result2) {
      if (!err2) {
        var recompensa = result2;
        if (result2 == null || result2 == undefined || result2 == {}) {
          await Recompensa.create(
            {
              usuario: req.body.usuario,
              sector: req.body.sector,
              ranking: 0,
              creditos: 0,
            },
            function (err3, result3) {
              if (!err3) {
                recompensa = result3;
              }
            }
          );
        }
        let currentRank = recompensa.ranking;
        let currentCreditos = recompensa.creditos;
        let interaccion = req.body.interaccion;
        var points;
        var credits;

        switch (interaccion) {
          case "dislike":
          case "disguardar":
            let dynamicValues =
              "dislike" === interaccion ? likeValues : saveValues;
            let dynamicValuesCredits =
              "dislike" === interaccion
                ? likeValuesCreditos
                : saveValuesCreditos;

            for (var i = 1; i < dynamicValues[0].length; i++) {
              var split = dynamicValues[0][i].split("-");

              let lower = parseFloat(split[0]);

              let higher = parseFloat(split[1]);

              if (currentRank >= lower && currentRank <= higher) {
                points = dynamicValues[1][i];
                credits = dynamicValuesCredits[1][i];
                break;
              }
            }
            let newRankRecompensa = getEarningsFromInteraction(
              points,
              currentRank,
              recompensa.usuario.calificacionApp || 1
            ).toFixed(2);
            let newCreditos = currentCreditos - credits;
            let total = recompensa.usuario.creditos - credits;
            if (newRankRecompensa > 10) {
              newRankRecompensa = 10;
            }
            if (newRankRecompensa < 0) {
              newRankRecompensa = 0;
            }
            if (newCreditos < 0) {
              newCreditos = 0;
            }
            if (total < 0) {
              total = 0;
            }
            Recompensa.updateById(
              recompensa._id,
              { ranking: newRankRecompensa, creditos: newCreditos },
              await function (error, resultRecompensa) {}
            );
            User.updateById(
              recompensa.usuario._id,
              { creditos: total },
              await function (err, resultUsuario) {}
            );
            return res.status(200).json("saved interaction");
          case "like":
            for (var i = 1; i < likeValues[0].length; i++) {
              var split = likeValues[0][i].split("-");
              let lower = parseFloat(split[0]);
              let higher = parseFloat(split[1]);
              if (currentRank >= lower && currentRank <= higher) {
                points = likeValues[1][i];
                credits = likeValuesCreditos[1][i];
                break;
              }
            }
            break;
          case "comentario":
            for (var i = 1; i < commentValues[0].length; i++) {
              var split = commentValues[0][i].split("-");
              let lower = parseFloat(split[0]);
              let higher = parseFloat(split[1]);
              if (currentRank >= lower && currentRank <= higher) {
                points = commentValues[1][i];
                credits = commentValuesCreditos[1][i];
                break;
              }
            }
            break;
          case "guardar":
            const notRewardedItems = await Save.getOne({
              alreadyRewarded: false,
            });

            if (notRewardedItems === null) {
              points = 0;
              credits = 0;
              break;
            }

            await Save.updateSave(
              { alreadyRewarded: false },
              { alreadyRewarded: true }
            );

            for (var i = 1; i < saveValues[0].length; i++) {
              var split = saveValues[0][i].split("-");
              let lower = parseFloat(split[0]);
              let higher = parseFloat(split[1]);
              if (currentRank >= lower && currentRank <= higher) {
                points = saveValues[1][i];
                credits = saveValuesCreditos[1][i];
                break;
              }
            }

            break;
          case "compartir":
            for (var i = 1; i < shareValues[0].length; i++) {
              var split = shareValues[0][i].split("-");

              let lower = parseFloat(split[0]);

              let higher = parseFloat(split[1]);

              if (currentRank >= lower && currentRank <= higher) {
                points = shareValues[1][i];
                credits = shareValuesCreditos[1][i];
                break;
              }
            }
            break;
        }

        let newRankRecompensa = getEarningsFromInteraction(
          points,
          currentRank,
          recompensa.usuario.calificacionApp || 1
        ).toFixed(2);
        let newCreditos = currentCreditos + credits;
        let total = recompensa.usuario.creditos + credits;
        if (newRankRecompensa > 10) {
          newRankRecompensa = 10;
        }
        if (newRankRecompensa < 0) {
          newRankRecompensa = 0;
        }
        Recompensa.updateById(
          recompensa._id,
          { ranking: newRankRecompensa, creditos: newCreditos },
          await function (error, resultRecompensa) {}
        );
        User.updateById(
          recompensa.usuario._id,
          { creditos: total },
          await function (err, resultUsuario) {}
        );
        return res.status(200).json("saved interaction");
      } else {
        return res.status(400).send({ error: err });
      }
    }
  );
};

exports.sumWatchTime = function (req, res) {
  if (req.body.sector) {
    Recompensa.get(
      { usuario: req.body.usuario, sector: req.body.sector },
      async function (err2, result2) {
        if (!err2) {
          var recompensa = result2;
          if (result2 == null) {
            try {
              recompensa = await createRecompensa({
                user: req.body.usuario,
                sector: req.body.sector,
              });
            } catch (error) {}
          }
          let currentRank = recompensa.ranking;
          if (currentRank > 10) {
            currentRank = 10;
          }
          let time = req.body.tiempo;
          var colIndex;
          var rowIndex;

          for (var i = 1; i < viewsValues[0].length; i++) {
            var split = viewsValues[0][i].split("-");
            let lower = parseFloat(split[0]);
            let higher = parseFloat(split[1]);
            if (currentRank >= lower && currentRank <= higher) {
              colIndex = i;
              break;
            }
          }

          for (var i = 1; i < viewsValues.length; i++) {
            var split = viewsValues[i][0].split("-");
            let lower = parseFloat(split[0]);
            let higher = parseFloat(split[1]);
            if (time >= lower && time <= higher) {
              rowIndex = i;
              break;
            }
          }
          const points = viewsValues[rowIndex][colIndex];
          let newRankRecompensa = (
            currentRank + getEarningsFromInteraction(points)
          ).toFixed(2);
          if (newRankRecompensa > 10) {
            newRankRecompensa = 10;
          }
          Recompensa.updateById(
            recompensa._id,
            { ranking: newRankRecompensa },
            await function (error, resultRecompensa) {}
          );

          return res.status(200).json("saved watch time");
        } else {
          return res.status(400).send({ error: err });
        }
      }
    );
  } else {
    return res.status(200).json("sector not defined");
  }
};

/**
 * Function to create recompensa
 * @param user
 * @param sector
 */
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

/** get function to get Recompensa by id. */
exports.getByUsuario = function (req, res) {
  Recompensa.getAll({ usuario: req.params.usuario }, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(400).send({ error: err });
    }
  });
};

/** get function to get Recompensa by id. */
exports.getcreditosByUsuario = function (req, res) {
  Recompensa.getAll({ usuario: req.params.usuario }, function (err, result) {
    if (!err) {
      let creditos = _.sumBy(result, "creditos");
      return res.status(200).json({ data: creditos });
    } else {
      return res.status(400).send({ error: err });
    }
  });
};

function getTotalScore(globalScore, scoreAverage) {
  let totalScore = globalScore * 0.4 + scoreAverage * 0.6;
  return totalScore;
}

/** get function to get ranking by id. */
exports.getRankingByUsuario = function (req, res) {
  Recompensa.getAll({ usuario: req.params.usuario }, function (err, result) {
    if (!err) {
      let sumRanking = _.sumBy(result, "ranking");
      let averageRanking = (sumRanking / result.length).toFixed(2);
      let totalScore = getTotalScore(
        result[0].usuario.calificacionApp,
        averageRanking
      );
      return res.status(200).json({ totalScore: totalScore });
    } else {
      return res.status(400).send({ error: err });
    }
  });
};

/** get function to get all Recompensa. */
exports.getAll = function (req, res) {
  Recompensa.getAll({}, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err);
    }
  });
};

/** update function to update Recompensa by id. */
exports.update = function (req, res) {
  Recompensa.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err);
    }
  });
};

/** Creates function to update Recompensa by id. */
exports.create = function (req, res) {
  Recompensa.create(req.body, function (err, result) {
    if (!err) {
      return res.status(201).json(result);
    } else {
      return res.status(400).send({ error: err });
    }
  });
};

/** remove function to remove Recompensa by id. */
exports.delete = function (req, res) {
  Recompensa.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err);
    }
  });
};
