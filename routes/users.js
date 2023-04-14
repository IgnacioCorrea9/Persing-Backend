const express = require("express");
const router = express.Router();

const passport = require("passport");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const moment = require("moment");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const Sector = require("../models/sector");
const Recompensa = require("../models/recompensa");
const sendGridCredentials = require("../config/sendgrid");
const sendgrid = require("@sendgrid/mail");
const sector = require("../models/sector");
sendgrid.setApiKey(sendGridCredentials.apiKey);

router.post("/register", (req, res, next) => {
  if (
    req.body.password &&
    // req.body.nombre &&
    req.body.email &&
    // req.body.apellido &&
    req.body.tipo
  ) {
    let newUser = new User({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
      tipo: req.body.tipo,
      creditos: req.body.creditos || 0,
      intereses: req.body.intereses || [],
      lastSeen: Date.now(),
    });
    newUser["calificacionApp"] = 1.5;
    if (req.body.empresa) {
      newUser["empresa"] = req.body.empresa;
    }
    if (req.body.genero) {
      newUser["genero"] = req.body.genero;
      newUser["calificacionApp"] += 0.5;
    }
    if (req.body.estrato) {
      newUser["estrato"] = req.body.estrato;
      newUser["calificacionApp"] += 1;
    }
    if (req.body.nivelEducativo) {
      newUser["nivelEducativo"] = req.body.nivelEducativo;
      newUser["calificacionApp"] += 1.5;
    }
    if (req.body.ocupacion) {
      newUser["ocupacion"] = req.body.ocupacion;
      newUser["calificacionApp"] += 2;
    }
    if (req.body.hijos) {
      newUser["hijos"] = req.body.hijos;
      newUser["calificacionApp"] += 0.5;
    }
    if (req.body.cantidadHijos) {
      newUser["cantidadHijos"] = req.body.cantidadHijos;
      newUser["calificacionApp"] += 0.5;
    }
    if (req.body.mascotas) {
      newUser["mascotas"] = req.body.mascotas;
      newUser["calificacionApp"] += 0.5;
    }
    if (req.body.cantidadMascotas) {
      newUser["cantidadMascotas"] = req.body.cantidadMascotas;
      newUser["calificacionApp"] += 0.5;
    }
    if (req.body.estadoCivil) {
      newUser["estadoCivil"] = req.body.estadoCivil;
      newUser["calificacionApp"] += 1.5;
    }
    User.addUser(newUser, async (err, user) => {
      if (err) {
        res.status(400).json({
          success: false,
          error: err,
        });
      } else {
        try {
          let recompensas = await createRecompensas({ user });
          res.status(201).json({
            success: true,
            user: user,
          });
        } catch (e) {
          res.status(201).json({
            success: true,
            user: user,
          });
        }
      }
    });
  } else {
    res.status(400).json({ success: false, error: "Información incompleta" });
  }
});

/**
 * Function to create recompensas for the user
 */
function createRecompensas({ user }) {
  return new Promise((success, error) => {
    Sector.getAll({}, function (err, result) {
      if (!err) {
        let recompensas = [];
        for (let sector of result) {
          let recompensa = {
            usuario: user._id,
            sector: sector._id,
          };
          recompensas.push(recompensa);
        }
        Recompensa.insertMany(recompensas, function (err, result) {
          if (!err) {
            return success(result);
          } else {
            return error(err);
          }
        });
      } else {
        return error(err);
      }
    });
  });
}

router.post("/forgot-password", (req, res, next) => {
  const email = req.body.email;
  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Usuario no encontrado" });
    }

    let pass = randomstring.generate(7);

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(pass, salt, (err, hash) => {
        if (err) throw err;
        User.findOneAndUpdate(
          { email: email },
          { password: hash },
          { upsert: true },
          function (err, doc) {
            if (err) throw err;
            const msg = {
              to: req.body.email,
              from: {
                email: "no-reply@persing.com",
                name: "Persing",
              },
              subject: "Restablecer contraseña",
              html:
                '<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>Recuperar Contraseña</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> /** * Google webfonts. Recommended to include the .woff version for cross-client compatibility. */ body { padding: 20px; } @media screen { @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 400; src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff"); } @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 700; src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format("woff"); } } /** * Avoid browser level font resizing. * 1. Windows Mobile * 2. iOS / OSX */ body, table, td, a { -ms-text-size-adjust: 100%; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ } /** * Remove extra space added to tables and cells in Outlook. */ table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; } /** * Better fluid images in Internet Explorer. */ img { -ms-interpolation-mode: bicubic; } /** * Remove blue links for iOS devices. */ a[x-apple-data-detectors] { font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; text-decoration: none !important; } /** * Fix centering issues in Android 4.4. */ div[style*="margin: 16px 0;"] { margin: 0 !important; } body { width: 100% !important; height: 100% !important; padding: 20px !important; margin: 0 !important; } /** * Collapse table borders to avoid space between cells. */ table { border-collapse: collapse !important; } a { color: #1a82e2; } img { height: auto; line-height: 100%; text-decoration: none; border: 0; outline: none; } </style> </head> <body style="background-color: #e9ecef;"> <!-- start preheader --> <div class="preheader" style="padding: 20px; display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;"> Tu nueva contraseña para Persing. </div> <!-- end preheader --> <!-- start body --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <!-- start hero --> <tr> <td align="left" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="left" valign="top" width="600"> <![endif]--> <table padding="15" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;"> <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Hola' +
                ',</h1> </td> </tr> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> <!-- end hero --> <!-- start copy block --> <tr> <td align="left" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="left" valign="top" width="600"> <![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <!-- start copy --> <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"> <p style="margin: 0;">Hemos restablecido tu contraseña, puedes usar esta contraseña temporal para ingresar al sistema:</p> </td> </tr> <!-- end copy --> <!-- start button --> <tr> <td align="left" bgcolor="#ffffff"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" bgcolor="#ffffff" style="padding: 12px;"> <table border="0" cellpadding="0" cellspacing="0"> <tr> <td align="left" bgcolor="#1a82e2" style="border-radius: 6px;"> <h3 style="color: white !important; margin: 10px 20px;"><b>' +
                pass +
                '</b></h3> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- end button --> <!-- start copy --> <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf"> <p style="margin: 0;">Saludos,<br> Equipo de Persing</p> </td> </tr> <!-- end copy --> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> <!-- end copy block --> <!-- end footer --> </table> <!-- end body --> </body> </html>',
            };
            const sendEmail = sendgrid.send(msg);
            sendEmail
              .then(function () {
                return res.status(200).json({
                  success: true,
                  msg: "Contraseña actualizada correctamente",
                  user,
                });
              })
              .catch(function () {});
          }
        );
      });
    });
  });
});

router.post("/reset-password", (req, res, next) => {
  const email = req.body.email;
  const pass = req.body.password;
  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(pass, salt, (err, hash) => {
        if (err) throw err;
        User.findOneAndUpdate(
          { email: email },
          { password: hash },
          { upsert: true },
          function (err, doc) {
            if (err) throw err;
            return res.json({
              success: true,
              msg: "Contraseña actualizada correctamente",
            });
          }
        );
      });
    });
  });
});

router.post("/authenticate", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;

    if (!user || user.deletedAt !== undefined) {
      return res
        .status(400)
        .json({ success: false, error: "Usuario no encontrado" });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(
          { user },
          process.env.JWT_SECRET || "persing8956789",
          {}
        );

        User.updateById(user._id, { lastSeen: Date.now() }, (err, result) => {
          if (err) {
            return res.send(err);
          }

          res.status(200).json({
            success: true,
            token: "JWT " + token,
            user: user,
          });
        });
      } else {
        return res
          .status(400)
          .json({ success: false, error: "Credenciales incorrectas" });
      }
    });
  });
});

router.post(
  "/change_pass",
  /* passport.authenticate("jwt", { session: false }), */
  (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const passwordNueva = req.body.passwordNueva;
    User.getUserByEmail(email, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({ success: false, msg: "User not found" });
      }
      // Comparo la contraseña vieja para ver si es correcta
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(passwordNueva, salt, (err, hash) => {
              if (err) {
                return res.json({
                  success: false,
                  msg: "Error al actualizar la contraseña, por favor intente de nuevo.",
                });
              }
              User.findOneAndUpdate(
                { email: email },
                { password: hash },
                { upsert: true },
                function (err, doc) {
                  if (err) throw err;
                  return res.json({
                    success: true,
                    msg: "Contraseña actualizada correctamente",
                  });
                }
              );
            });
          });
        } else {
          return res.json({
            success: false,
            msg: "La contraseña vieja es incorrecta.",
          });
        }
      });
    });
  }
);

router.post(
  "/change_pass_admin",
  // passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const admin = req.body.admin;
    const email = req.body.email;
    const passwordNueva = req.body.passwordNueva;
    User.getUserByEmail(email, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({ success: false, msg: "User not found" });
      }
      //Se verifica que sea un admin del sistema
      User.getUserById(admin, (err, user) => {
        if (err) throw err;
        if (user.tipo === "superadministrador") {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(passwordNueva, salt, (err, hash) => {
              if (err) {
                return res.json({
                  success: false,
                  msg: "Error al actualizar la contraseña, por favor intente de nuevo.",
                });
              }
              User.findOneAndUpdate(
                { email: email },
                { password: hash },
                { upsert: true },
                function (err, doc) {
                  if (err) throw err;
                  return res.json({
                    success: true,
                    msg: "Contraseña actualizada correctamente",
                  });
                }
              );
            });
          });
        } else {
          return res.json({
            success: false,
            msg: "No tienes autorización para hacer este cambio.",
          });
        }
      });
    });
  }
);

router.post("/verify-email", (req, res, next) => {
  User.getUserByEmail(req.body.email, (error, result) => {
    if (!error) {
      if (result !== null) {
        res.status(200).json({
          success: false,
          data: { message: "Email ya registrado" },
          message: "Email ya registrado",
        });
      } else {
        res.status(200).json({
          success: true,
          data: { message: "Available" },
          message: "Available",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        data: { error: error.toString() },
        message: error.toString(),
      });
    }
  });
});

module.exports = router;
