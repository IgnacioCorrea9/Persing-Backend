// const express = require("express");
// const router = express.Router();
// var cron = require("node-cron");
// const Aplicacion = require("../models/aplicacion");
// const Alerta = require("../models/alerta");

// // Sendgrid stuff
// const sendGridCredentials = require("../config/sendgrid");
// const sendgrid = require("@sendgrid/mail");
// sendgrid.setApiKey(sendGridCredentials.apiKey);

// router.post("/sendEmail", (req, res) => {
//   const msg = {
//     to: req.body.to,
//     from: "notifications@vtrapp.com",
//     subject: req.body.subject,
//     html: req.body.html,
//   };
//   const sendEmail = sendgrid.send(msg);
//   sendEmail
//     .then(function () {
//       res.json({ success: true, msg: "Email sent" });
//     })
//     .catch(function () {
//       res.json({ success: false, msg: "Error sending email" });
//     });
// });

// function sendWelcomeEmail(user) {
//   const msg = {
//     to: user.email,
//     from: "no-reply@u360.herokuapp.com",
//     subject: "¡Bienvenido/a a U360!",
//     html:
//       '<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>Email prueba</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> /** * Google webfonts. Recommended to include the .woff version for cross-client compatibility. */ @media screen { @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 400; src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff"); } @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 700; src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format("woff"); } } /** * Avoid browser level font resizing. * 1. Windows Mobile * 2. iOS / OSX */ body, table, td, a { -ms-text-size-adjust: 100%; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ } /** * Remove extra space added to tables and cells in Outlook. */ table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; } /** * Better fluid images in Internet Explorer. */ img { -ms-interpolation-mode: bicubic; } /** * Remove blue links for iOS devices. */ a[x-apple-data-detectors] { font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; text-decoration: none !important; } /** * Fix centering issues in Android 4.4. */ div[style*="margin: 16px 0;"] { margin: 0 !important; } body { width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; } /** * Collapse table borders to avoid space between cells. */ table { border-collapse: collapse !important; } a { color: #1a82e2; } img { height: auto; line-height: 100%; text-decoration: none; border: 0; outline: none; } </style> </head> <body style="background-color: #ffffff;"> <!-- start preheader --> <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;"> Sell request. </div> <!-- end preheader --> <!-- start body --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <!-- start logo --> <tr> <td align="center" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="center" valign="top" width="600"> <![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="center" valign="top" style="padding: 36px 24px;">' +
//       `<p data-renderer-start-pos="3" style='margin: 0px; padding: 0px;>Estimado ${user.nombre} ${user.apellido}, Bienvenido al proceso para hacer &eacute;xitoso tu viaje de estudios en el exterior. Nuestro equipo de Admisiones te estar&aacute; contactando en los pr&oacute;ximos d&iacute;as para chequear tu elegibilidad en el programa seleccionado, o, ayudarte a escoger una mejor opci&oacute;n en caso de que sea lo que mejor se adapte a tu requerimiento. Te invitamos a:</p>
//       <ol class="ak-ol" data-indent-level="2" style='margin: 4px 0px 0px; padding: 0px 0px 0px 24px; box-sizing: border-box; list-style-type: lower-alpha; display: flow-root; color: rgb(23, 43, 77); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
//           <li>
//               <p data-renderer-start-pos="346" style="margin: 0px; padding: 0px; font-size: 1em; line-height: 1.714; font-weight: normal; letter-spacing: -0.005em;">Firmar digitalmente, aceptar, &nbsp;los t&eacute;rminos y condiciones de nuestro servicio. (Requisito para seguir)</p>
//           </li>
//           <li style="margin-top: 4px;">
//               <p data-renderer-start-pos="452" style="margin: 0px; padding: 0px; font-size: 1em; line-height: 1.714; font-weight: normal; letter-spacing: -0.005em;">Una vez hayas firmado los t&eacute;rminos y condiciones, chequear el detalle de tu proceso, debes tener claridad sobre lo que vendr&aacute; en tu proceso.</p>
//           </li>
//       </ol>
//       <ul class="ak-ul" data-indent-level="2" style='margin: 4px 0px 0px; padding: 0px 0px 0px 24px; box-sizing: border-box; list-style-type: circle; display: flow-root; color: rgb(23, 43, 77); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
//           <li>
//               <p data-renderer-start-pos="598" style="margin: 0px; padding: 0px; font-size: 1em; line-height: 1.714; font-weight: normal; letter-spacing: -0.005em;">(Aviso: *Una vez seas aceptado, los tiempos de cada uno de los pasos de tu proceso se publicaran en la secci&oacute;n Paso a Paso de tu aplicaci&oacute;n.)</p>
//           </li>
//       </ul>` +
//       `Saludos!<br>` +
//       `Equipo de U360` +
//       `<br>` +
//       '</p> </td> </tr> <!-- end copy --> <!-- start button --> <tr> <td align="left" bgcolor="#ffffff"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="center" bgcolor="#ffffff" style="padding: 12px;"> <table border="0" cellpadding="0" cellspacing="0"> <tr> <td align="center" bgcolor="#ffffff" style="border-radius: 6px;"> <h3 style="color: white !important; margin: 10px 20px;"><b>' +
//       '</b></h3> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- end button --> <!-- start copy --> <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #ffffff"></td> </tr> <!-- end copy --> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> <!-- end copy block --> <!-- end footer --> </table> <!-- end body --> </body> </html>',
//   };
//   const sendEmail = sendgrid.send(msg);
//   sendEmail
//     .then(function () {
//       console.log("email sent");
//     })
//     .catch(function () {
//       console.log("email not sent");
//     });
// }



// /**
//  * Sends application to expire
//  * @param {*} data of the email
//  */
// function sendEmail(data) {
//   const msg = {
//     to: data.email,
//     from: "no-reply@u360.herokuapp.com",
//     subject: data.subject,
//     html:
//       '<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>Email prueba</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> /** * Google webfonts. Recommended to include the .woff version for cross-client compatibility. */ @media screen { @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 400; src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff"); } @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 700; src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format("woff"); } } /** * Avoid browser level font resizing. * 1. Windows Mobile * 2. iOS / OSX */ body, table, td, a { -ms-text-size-adjust: 100%; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ } /** * Remove extra space added to tables and cells in Outlook. */ table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; } /** * Better fluid images in Internet Explorer. */ img { -ms-interpolation-mode: bicubic; } /** * Remove blue links for iOS devices. */ a[x-apple-data-detectors] { font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; text-decoration: none !important; } /** * Fix centering issues in Android 4.4. */ div[style*="margin: 16px 0;"] { margin: 0 !important; } body { width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; } /** * Collapse table borders to avoid space between cells. */ table { border-collapse: collapse !important; } a { color: #1a82e2; } img { height: auto; line-height: 100%; text-decoration: none; border: 0; outline: none; } </style> </head> <body style="background-color: #ffffff;"> <!-- start preheader --> <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;"> Sell request. </div> <!-- end preheader --> <!-- start body --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <!-- start logo --> <tr> <td align="center" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="center" valign="top" width="600"> <![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="center" valign="top" style="padding: 36px 24px;">' +
//       `Hola ${data.estudiante}<br>` +
//       `El próximo paso a tu aplicación al programa ${data.programa} de ${data.universidad} se encuentra próximo a vencerse.<br>` +
//       `Siguiente paso: ${data.paso}<br>` +
//       `Fecha límite: ${data.fecha_limite}<br>` +
//       `Saludos!<br>` +
//       `Equipo de U360` +
//       `<br>` +
//       '</p> </td> </tr> <!-- end copy --> <!-- start button --> <tr> <td align="left" bgcolor="#ffffff"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="center" bgcolor="#ffffff" style="padding: 12px;"> <table border="0" cellpadding="0" cellspacing="0"> <tr> <td align="center" bgcolor="#ffffff" style="border-radius: 6px;"> <h3 style="color: white !important; margin: 10px 20px;"><b>' +
//       '</b></h3> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- end button --> <!-- start copy --> <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #ffffff"></td> </tr> <!-- end copy --> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> <!-- end copy block --> <!-- end footer --> </table> <!-- end body --> </body> </html>',
//   };
//   const sendEmail = sendgrid.send(msg);
//   sendEmail
//     .then(function () {
//       console.log("email sent");
//     })
//     .catch(function () {
//       console.log("email not sent");
//     });
// }
// /** Function that sends an email notifying that someone requested being contacted*/
// router.post("/send-contact-mail", (req, res) => {
//   const msg = {
//     to: "info@hec-latam.com",
//     from: "no-reply@u360.herokuapp.com",
//     subject: "Solicitud de contacto",
//     html:
//       '<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>Email prueba</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> /** * Google webfonts. Recommended to include the .woff version for cross-client compatibility. */ @media screen { @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 400; src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff"); } @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 700; src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format("woff"); } } /** * Avoid browser level font resizing. * 1. Windows Mobile * 2. iOS / OSX */ body, table, td, a { -ms-text-size-adjust: 100%; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ } /** * Remove extra space added to tables and cells in Outlook. */ table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; } /** * Better fluid images in Internet Explorer. */ img { -ms-interpolation-mode: bicubic; } /** * Remove blue links for iOS devices. */ a[x-apple-data-detectors] { font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; text-decoration: none !important; } /** * Fix centering issues in Android 4.4. */ div[style*="margin: 16px 0;"] { margin: 0 !important; } body { width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; } /** * Collapse table borders to avoid space between cells. */ table { border-collapse: collapse !important; } a { color: #1a82e2; } img { height: auto; line-height: 100%; text-decoration: none; border: 0; outline: none; } </style> </head> <body style="background-color: #ffffff;"> <!-- start preheader --> <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;"> Sell request. </div> <!-- end preheader --> <!-- start body --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <!-- start logo --> <tr> <td align="center" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="center" valign="top" width="600"> <![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="center" valign="top" style="padding: 36px 24px;">' +
//       `Cordial saludo, <br>` +
//       `Te informamos que ${req.body.nombre} solicitó ser contactado por el equipo de U360, su información de contacto es la siguiente es: <br>` +
//       `Número de telefono ${req.body.telefono}<br>` +
//       `Correo electrónico: ${req.body.email}<br>` +
//       `Saludos!<br>` +
//       `Equipo de U360` +
//       `<br>` +
//       '</p> </td> </tr> <!-- end copy --> <!-- start button --> <tr> <td align="left" bgcolor="#ffffff"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="center" bgcolor="#ffffff" style="padding: 12px;"> <table border="0" cellpadding="0" cellspacing="0"> <tr> <td align="center" bgcolor="#ffffff" style="border-radius: 6px;"> <h3 style="color: white !important; margin: 10px 20px;"><b>' +
//       '</b></h3> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- end button --> <!-- start copy --> <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #ffffff"></td> </tr> <!-- end copy --> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> <!-- end copy block --> <!-- end footer --> </table> <!-- end body --> </body> </html>',
//   };
//   const sendEmail = sendgrid.send(msg);
//   sendEmail
//     .then(function () {
//       res.json({ success: true, msg: "Email sent" });
//     })
//     .catch(function () {
//       res.json({ success: false, msg: "Error sending email" });
//     });
// });

// /**
//  * Sends application to expire
//  * @param {*} data of the email
//  */
// function sendContactEmail(data) {
//   const msg = {
//     to: data.email,
//     from: "no-reply@u360.herokuapp.com",
//     subject: data.subject,
//     html:
//       '<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>Email prueba</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> /** * Google webfonts. Recommended to include the .woff version for cross-client compatibility. */ @media screen { @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 400; src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff"); } @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 700; src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format("woff"); } } /** * Avoid browser level font resizing. * 1. Windows Mobile * 2. iOS / OSX */ body, table, td, a { -ms-text-size-adjust: 100%; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ } /** * Remove extra space added to tables and cells in Outlook. */ table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; } /** * Better fluid images in Internet Explorer. */ img { -ms-interpolation-mode: bicubic; } /** * Remove blue links for iOS devices. */ a[x-apple-data-detectors] { font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; text-decoration: none !important; } /** * Fix centering issues in Android 4.4. */ div[style*="margin: 16px 0;"] { margin: 0 !important; } body { width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; } /** * Collapse table borders to avoid space between cells. */ table { border-collapse: collapse !important; } a { color: #1a82e2; } img { height: auto; line-height: 100%; text-decoration: none; border: 0; outline: none; } </style> </head> <body style="background-color: #ffffff;"> <!-- start preheader --> <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;"> Sell request. </div> <!-- end preheader --> <!-- start body --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <!-- start logo --> <tr> <td align="center" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="center" valign="top" width="600"> <![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="center" valign="top" style="padding: 36px 24px;">' +
//       `Hola ${data.estudiante}<br>` +
//       `El próximo paso a tu aplicación al programa ${data.programa}  de ${data.universidad} se encuentra próximo a vencerse.<br>` +
//       `Siguiente paso: ${data.paso}<br>` +
//       `Fecha límite: ${data.fecha_limite}<br>` +
//       `Saludos!<br>` +
//       `Equipo de U360` +
//       `<br>` +
//       '</p> </td> </tr> <!-- end copy --> <!-- start button --> <tr> <td align="left" bgcolor="#ffffff"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="center" bgcolor="#ffffff" style="padding: 12px;"> <table border="0" cellpadding="0" cellspacing="0"> <tr> <td align="center" bgcolor="#ffffff" style="border-radius: 6px;"> <h3 style="color: white !important; margin: 10px 20px;"><b>' +
//       '</b></h3> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- end button --> <!-- start copy --> <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #ffffff"></td> </tr> <!-- end copy --> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> <!-- end copy block --> <!-- end footer --> </table> <!-- end body --> </body> </html>',
//   };
//   const sendEmail = sendgrid.send(msg);
//   sendEmail
//     .then(function () {
//       console.log("email sent");
//     })
//     .catch(function () {
//       console.log("email not sent");
//     });
// }

// /**
//  * Cron that sends the email at 8am Bogota to each application next to expire
//  */
// cron.schedule(
//   "0 0 8 * * *",
//   () => {
//     console.log("running chron");
//     Aplicacion.getAll({}, function (err, result) {
//       if (!err) {
//         if (result.length > 0) {
//           aVencer = result.filter((element) => {
//             // if the nextStepDate is greater than now but less than now in a week
//             if (
//               element.fechaProximoPaso >= new Date(Date.now()) &&
//               element.fechaProximoPaso <= new Date(Date.now() + 604800000)
//             ) {
//               return true;
//             }
//           });
//           aVencer.forEach((element) => {
//             const data = {
//               subject: "Aplicación próxima a vencerse",
//               email: element.estudiante.email,
//               estudiante:
//                 element.estudiante.nombre + " " + element.estudiante.apellido,
//               programa: element.programa.nombre,
//               universidad: element.programa.universidad.nombre,
//               paso: element.pasoActual,
//               fecha_limite: element.fechaProximoPaso
//                 ? element.fechaProximoPaso.toLocaleString()
//                 : "sin definir",
//             };
//             // Create the alert that will be displayed in the student web application
//             const alerta = {
//               usuario: element.estudiante._id,
//               aplicacion: element._id,
//               mensaje: `The next step of your application to ${data.programa} in ${data.universidad} will expire in less than a week,
//                             please complete the steps as soon as possible.`,
//               mensajeEspaniol: `El próximo paso de tu aplicación al programa ${data.programa} en la universidad ${data.universidad} está próximo a vencerse,
//                                     por favor completa los pasos lo más pronto posible.`,
//             };
//             Alerta.create(alerta);
//             sendEmail(data);
//           });
//         }
//       } else {
//         console.log(err);
//       }
//     });
//   },
//   {
//     scheduled: true,
//     timezone: "America/Bogota",
//   }
// );

// module.exports = router;
