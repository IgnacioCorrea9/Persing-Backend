'use strict';

const Publicacion = require('../models/publicacion');
const Pagos = require('../models/pagos');
const Like = require('../models/like');
const User = require('../models/user');
const Save = require('../models/save');
const _ = require('lodash');
const Notificaciones = require('../models/notificaciones');

/** get function to get Publicacion by id. */
exports.get = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** Gets publicaciones and evaluates for each one if user liked it or saved it and modifies model response.
 * FLiters by name and description if query available
 */
/* exports.getAllForUser = function (req, res) {
  Publicacion.getAll({ deletedAt: { $exists: false } }, function (err, result) {
    if (!err) {
      const userId = req.params.user;
      User.get({ _id: userId }, function (err2, usuario) {
        if (!err) {
          if (usuario) {
            result.forEach((element) => {
              var liked = element.likes.includes(userId);
              element._doc['liked'] = liked;
              element._doc['likes'] = element.likes.length;
              var saved = element.guardados.includes(userId);
              element._doc['saved'] = saved;
            });
            const search = req.query.search;
            if (search) {
              result = result.filter(
                (p) =>
                  p.titulo.toLowerCase().includes(search) ||
                  p.texto.toLowerCase().includes(search)
              );
            }
            if (req.query.intereses) {
              const intereses = req.query.intereses
                .replace(/\s/g, '')
                .substring(1)
                .slice(0, -1)
                .split(',');
              usuario.intereses = intereses;
            }
            result = result.filter((p) => {
              return (
                p.sector && usuario.intereses.includes(p.sector._id.toString())
              );
            });
            result = _.shuffle(result);
            return res.status(200).json({ success: true, data: result });
          }
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
}; */

exports.getAllForUser = async (req, res) => {
  let rangoSearch = '';
  let PubPagas = await Pagos.find({});
  let userData = await User.findById(req.params.user);
  let idFiltro = [];
  let rango = userData.calificacionApp;

  if (rango > 0 && rango <= 3) {
    rangoSearch = 'Principiante';
  } else if (rango > 3 && rango <= 5) {
    rangoSearch = 'Bajo';
  } else if (rango > 5 && rango <= 7) {
    rangoSearch = 'Medio';
  } else if (rango > 7 && rango <= 9) {
    rangoSearch = 'Alto';
  } else if (rango > 9 && rango <= 10) {
    rangoSearch = 'Super Alto';
  }

  Promise.all(
    PubPagas.map((elementId) => {
      elementId.porcentajes.forEach((element) => {
        if (element.rango == rangoSearch && element.porcentaje > 0) {
          idFiltro.push(elementId.publicacion);
        }
      });
    })
  );

  Publicacion.getAll(
    {
      $and: [
        { deletedAt: { $exists: false } },
        {
          _id: { $in: idFiltro },
        },
        {
          inversionRestante: { $gt: 0 },
        },
      ],
    },
    function (err, result) {
      if (!err) {
        const userId = req.params.user;
        User.get({ _id: userId }, function (err2, usuario) {
          if (!err) {
            if (usuario) {
              result.forEach((element) => {
                var liked = element.likes.includes(userId);
                element._doc['liked'] = liked;
                element._doc['likes'] = element.likes.length;
                var saved = element.guardados.includes(userId);
                element._doc['saved'] = saved;
              });
              const search = req.query.search;
              if (search) {
                result = result.filter(
                  (p) =>
                    p.titulo.toLowerCase().includes(search) ||
                    p.texto.toLowerCase().includes(search)
                );
              }
              if (req.query.intereses) {
                const intereses = req.query.intereses
                  .replace(/\s/g, '')
                  .substring(1)
                  .slice(0, -1)
                  .split(',');
                usuario.intereses = intereses;
              }
              result = result.filter((p) => {
                return (
                  p.sector &&
                  usuario.intereses.includes(p.sector._id.toString())
                );
              });
              result = _.shuffle(result);
              return res.status(200).json({ success: true, data: result });
            }
          }
        });
      } else {
        return res.status(500).send({ success: false, error: err }); // 500 error
      }
    }
  );
};

/**
 * Gets all publicaciones destacadas
 * @param {*} req
 * @param {*} res
 */
exports.getAllDestacadas = function (req, res) {
  Publicacion.getAll(
    { destacada: true, deletedAt: { $exists: false } },
    function (err, result) {
      if (!err) {
        return res.status(200).json({ success: true, data: result });
      } else {
        return res.status(500).send({ success: false, error: err }); // 500 error
      }
    }
  );
};

/**
 * Gets all publicaciones nuevas
 * @param {*} req
 * @param {*} res
 */
exports.getAllNuevas = async (req, res) => {
  Publicacion.getAll({ nueva: true }, async (err, result) => {
    let hoy = new Date();
    let tiempoResta = 1000 * 60 * 60 * 24 * 90;
    let Resultados = [];
    await Promise.all(
      result.map((element) => {
        if (hoy.getTime() - element.createdAt.getTime() >= tiempoResta) {
          Publicacion.updateById(
            element._id,
            { nueva: false },
            function (err, result) {}
          );
        } else {
          Resultados.push(element);
        }
      })
    )
      .then()
      .catch();
    if (!err) {
      return res.status(200).json({ success: true, data: Resultados });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/**
 * Gets all publicaciones nuevas
 * @param {*} req
 * @param {*} res
 */
exports.getNuevasByUser = function (req, res) {
  Publicacion.getAll(
    { nueva: true, deletedAt: { $exists: false } },
    function (err, result) {
      if (!err) {
        const userId = req.params.user;
        User.get({ _id: userId }, function (err2, usuario) {
          if (!err) {
            if (usuario) {
              result.forEach((element) => {
                var liked = element.likes.includes(userId);
                element._doc['liked'] = liked;
                element._doc['likes'] = element.likes.length;
                var saved = element.guardados.includes(userId);
                element._doc['saved'] = saved;
              });
              const search = req.query.search;
              if (search) {
                result = result.filter(
                  (p) =>
                    p.titulo.toLowerCase().includes(search) ||
                    p.texto.toLowerCase().includes(search)
                );
              }
              if (req.query.intereses) {
                const intereses = req.query.intereses
                  .replace(/\s/g, '')
                  .substring(1)
                  .slice(0, -1)
                  .split(',');
                usuario.intereses = intereses;
              }
              result = result.filter((p) => {
                return (
                  p.sector &&
                  usuario.intereses.includes(p.sector._id.toString())
                );
              });
              result = _.shuffle(result);
              return res.status(200).json({ success: true, data: result });
            }
          }
        });
      } else {
        return res.status(500).send({ success: false, error: err }); // 500 error
      }
    }
  );
};

/** Gets publicaciones and evaluates for each one if user liked it or saved it and modifies model response.
 * FLiters by name and description if query available
 */
exports.getAllDestacadasForUser = function (req, res) {
  Publicacion.getAll(
    { destacada: true, deletedAt: { $exists: false } },
    function (err, result) {
      if (!err) {
        const userId = req.params.user;
        result.forEach((element) => {
          var liked = element.likes.includes(userId);
          element._doc['liked'] = liked;
          element._doc['likes'] = element.likes.length;
          var saved = element.guardados.includes(userId);
          element._doc['saved'] = saved;
          const search = req.query.search;
          if (search) {
            result = result.filter(
              (p) =>
                p.titulo.toLowerCase().includes(search) ||
                p.texto.toLowerCase().includes(search)
            );
          }
        });
        result = _.shuffle(result);
        return res.status(200).json({ success: true, data: result });
      } else {
        return res.status(500).send({ success: false, error: err }); // 500 error
      }
    }
  );
};

exports.toggleSave = function (req, res) {
  function updatePost(arrayToUpdate) {
    var toSave = {
      guardados: arrayToUpdate,
    };

    Publicacion.updateById(req.params.id, toSave, function (err, result) {
      if (!err) {
        return res.status(200).json({ success: true, data: result });
      } else {
        return res.status(500).send({ success: false, error: err });
      }
    });
  }

  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const userId = req.body.user;
      const type = req.body.type;
      const arraySaves = result._doc.guardados;

      if (type === 'add') {
        Save.upsert(
          { publicacion: req.params.id },
          {
            usuario: userId,
            publicacion: req.params.id,
            alreadyRewarded: false,
            createdAt: Date.now(),
          },
          function (err, result) {
            if (err) {
              return res.status(500).send({ success: false, error: err });
            }

            if (!arraySaves.includes(userId)) {
              arraySaves.push(userId);
            }
            return updatePost(arraySaves);
          }
        );
      } else {
        const index = arraySaves.indexOf(userId);
        if (index > -1) {
          arraySaves.splice(index, 1);
        }
        return updatePost(arraySaves);
      }
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.addView = async (req, res) => {
  //let userData = await User.findById('61f800c376adbe001615b191');
  let rango = 2;
  let rangoCosto = 0;

  if (rango > 0 && rango <= 3) {
    rangoCosto = 150;
  } else if (rango > 3 && rango <= 5) {
    rangoCosto = 120;
  } else if (rango > 5 && rango <= 7) {
    rangoCosto = 100;
  } else if (rango > 7 && rango <= 9) {
    rangoCosto = 80;
  } else if (rango > 9 && rango <= 10) {
    rangoCosto = 60;
  }

  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const views = result._doc.alcanzados;
      let inversionRestante = result._doc.inversionRestante - rangoCosto;
      let updatedViews = views + 1;
      var toSave = {
        alcanzados: updatedViews,
        inversionRestante: inversionRestante,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          let notificacion;
          if (updatedViews % 5 == 0) {
            let dataNotificacion = {
              publicacion: result._doc._id,
              empresa: result._doc.empresa,
              accion: 'Vistas',
              hito: updatedViews,
            };
            Notificaciones.create(dataNotificacion, function (err, result) {
              notificacion = result;
            });
          }

          return res
            .status(200)
            .json({ success: true, data: result, notificacion: notificacion });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.interacted = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const interacted = result._doc.interacted;
      let updateInteractions = interacted + 1;
      var toSave = {
        interacted: updateInteractions,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          let notificacion;
          if (updateInteractions % 10 == 0) {
            let dataNotificacion = {
              publicacion: result._doc._id,
              empresa: result._doc.empresa,
              accion: 'Interacciones',
              hito: updateInteractions,
            };

            Notificaciones.create(dataNotificacion, function (err, result) {
              notificacion = result;
            });
          }

          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.engagement = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const views = result._doc.alcanzados;
      const interacted = result._doc.interacted;
      let updateEngagement = (interacted * 100) / views;
      var toSave = {
        engagement: updateEngagement,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.cpmCalculation = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const inversion = result._doc.inversion;
      let updateCpm = inversion / 1000;
      var toSave = {
        cpm: updateCpm,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.cpcCalculation = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const inversion = result._doc.inversion;
      const clicks = result._doc.linkClicks;
      let updateCpc = inversion / clicks;
      var toSave = {
        cpc: updateCpc,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.ctrCalculation = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const views = result._doc.alcanzados;
      const clicks = result._doc.linkClicks;
      let updatedCtr = (clicks * 100) / views;
      var toSave = {
        ctr: updatedCtr,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.vtrCalculation = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const views = result._doc.alcanzados;
      const vtrReached = result._doc.vtr;
      let updatedVtr = vtrReached + 1;
      var toSave = {
        vtr: updatedVtr,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.ignoredPost = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const ignored = result._doc.ignored;
      let updateIgnored = ignored + 1;
      var toSave = {
        ignored: updateIgnored,
      };

      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.linkClicked = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const clicks = result._doc.linkClicks;
      let updatedClicks = clicks + 1;
      var toSave = {
        linkClicks: updatedClicks,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.getAllSavedByUser = function (req, res) {
  Publicacion.getAll(
    { guardados: { $in: [req.params.user] }, deletedAt: { $exists: false } },
    function (err, result) {
      if (!err) {
        const userId = req.params.user;
        result.forEach((element) => {
          var liked = element.likes.includes(userId);
          element._doc['liked'] = liked;
          element._doc['likes'] = element.likes.length;
          var saved = element.guardados.includes(userId);
          element._doc['saved'] = saved;
        });
        return res.status(200).json({ success: true, data: result });
      } else {
        return res.status(500).send({ success: false, error: err }); // 500 error
      }
    }
  );
};

exports.toggleLike = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const userId = req.body.user;
      const type = req.body.type;
      const arrayLikes = result._doc.likes;
      if (type === 'add') {
        if (!arrayLikes.includes(userId)) {
          arrayLikes.push(userId);
        }
      } else {
        const index = arrayLikes.indexOf(userId);
        if (index > -1) {
          arrayLikes.splice(index, 1);
        }
      }
      var toSave = {
        likes: arrayLikes,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          let notificacion;
          if (arrayLikes.length % 5 == 0) {
            let dataNotificacion = {
              publicacion: result._doc._id,
              empresa: result._doc.empresa,
              accion: 'Likes',
              hito: arrayLikes.length,
            };
            Notificaciones.create(dataNotificacion, function (err, result) {
              notificacion = result;
            });
          }
          const like = {
            publicacion: req.params.id,
            usuario: userId,
          };
          Like.create(like, function (err2, result2) {
            if (!err2) {
              console.log('created like');
            }
          });
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** get function to get all Publicacion. */
exports.getAll = function (req, res) {
  Publicacion.getAll({ deletedAt: { $exists: false } }, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** get function to get all Publicacion by empresa and user */
exports.getAllByEmpresaAndUser = function (req, res) {
  Publicacion.getAll({ empresa: req.params.empresa }, function (err, result) {
    if (!err) {
      const userId = req.params.user;
      User.get({ _id: userId }, function (err2, usuario) {
        if (!err) {
          if (usuario) {
            result.forEach((element) => {
              var liked = element.likes.includes(userId);
              element._doc['liked'] = liked;
              element._doc['likes'] = element.likes.length;
              var saved = element.guardados.includes(userId);
              element._doc['saved'] = saved;
            });
            return res.status(200).json({ success: true, data: result });
          }
        } else {
          return res
            .status(500)
            .send({ success: false, error: 'User not found' });
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** get function to get all Publicacion by empresa */
exports.getAllByEmpresa = function (req, res) {
  Publicacion.getAll({ empresa: req.params.empresa }, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: 'User not found' });
    }
  });
};

/** get function to get all Publicacion. */
/** get function to get all Publicacion. */
exports.getAllBySector = function (req, res) {
  Publicacion.getAll(
    { sector: req.params.sector, deletedAt: { $exists: false } },
    function (err, result) {
      if (!err) {
        const userId = req.params.user;
        result.forEach((element) => {
          var liked = element.likes.includes(userId);
          element._doc['liked'] = liked;
          element._doc['likes'] = element.likes.length;
          var saved = element.guardados.includes(userId);
          element._doc['saved'] = saved;
        });
        return res.status(200).json({ success: true, data: result });
        return res.status(200).json({ success: true, data: result });
      } else {
        return res.status(500).send({ success: false, error: err }); // 500 error
      }
    }
  );
};

/** update function to update Publicacion by id. */
exports.update = function (req, res) {
  Publicacion.updateById(req.params.id, req.body, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** update function to create post */
exports.create = function (req, res) {
  let dataPublicacion = req.body;
  dataPublicacion.nueva = true;
  Publicacion.create(dataPublicacion, function (err, result) {
    if (!err) {
      return res.status(201).json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

/** remove function to remove Publicacion by id. */
exports.delete = function (req, res) {
  Publicacion.removeById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};

exports.deletePost = function (req, res) {
  Publicacion.updateById(
    req.params.id,
    { habilitada: false },
    function (err, result) {
      if (!err) {
        return res.status(200).json({ success: true, data: result });
      } else {
        return res.status(500).send({ success: false, error: err }); // 500 error
      }
    }
  );
};

exports.inversionUpdate = function (req, res) {
  Publicacion.get({ _id: req.params.id }, function (err, result) {
    if (!err) {
      const inversion = result.inversion;
      let inversionUpdate = inversion + req.body.inversion;
      let inversionRestanteUpdate =
        result.inversionRestante + req.body.inversion;
      var toSave = {
        inversion: inversionUpdate,
        inversionRestante: inversionRestanteUpdate,
      };
      Publicacion.updateById(req.params.id, toSave, function (err, result) {
        if (!err) {
          return res.status(200).json({ success: true, data: result });
        } else {
          return res.status(500).send({ success: false, error: err }); // 500 error
        }
      });
    } else {
      return res.status(500).send({ success: false, error: err }); // 500 error
    }
  });
};
