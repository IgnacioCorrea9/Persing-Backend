'use strict';

var Transaccion = require('../models/transaccion');
const sendGridCredentials = require('../config/sendgrid');
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(sendGridCredentials.apiKey);

exports.create = function (req, res) {
  Transaccion.create(req.body, function (err, result) {
    if (!err) {
      const msg = {
        to: process.env.CLIENT_EMAIL,
        from: {
          email: process.env.FROM_EMAIL,
          name: 'Persing',
        },
        subject: '¡Se ha realizado una nueva compra!',
        html:
          '<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>Nueva</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> /** * Google webfonts. Recommended to include the .woff version for cross-client compatibility. */ body { padding: 20px; } @media screen { @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 400; src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff"); } @font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 700; src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format("woff"); } } /** * Avoid browser level font resizing. * 1. Windows Mobile * 2. iOS / OSX */ body, table, td, a { -ms-text-size-adjust: 100%; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ } /** * Remove extra space added to tables and cells in Outlook. */ table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; } /** * Better fluid images in Internet Explorer. */ img { -ms-interpolation-mode: bicubic; } /** * Remove blue links for iOS devices. */ a[x-apple-data-detectors] { font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; text-decoration: none !important; } /** * Fix centering issues in Android 4.4. */ div[style*="margin: 16px 0;"] { margin: 0 !important; } body { width: 100% !important; height: 100% !important; padding: 20px !important; margin: 0 !important; } /** * Collapse table borders to avoid space between cells. */ table { border-collapse: collapse !important; } a { color: #1a82e2; } img { height: auto; line-height: 100%; text-decoration: none; border: 0; outline: none; } </style> </head> <body style="background-color: #e9ecef;"> <!-- start preheader --> <div class="preheader" style="padding: 20px; display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">  </div> <!-- end preheader --> <!-- start body --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <!-- start hero --> <tr> <td align="left" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="left" valign="top" width="600"> <![endif]--> <table padding="15" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;"> <h1 style="margin: 0; font-size: 18px; font-weight: 500; letter-spacing: -1px; line-height: 48px;">Hola Equipo' +
          ',</h1> </td> </tr> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> <!-- end hero --> <!-- start copy block --> <tr> <td align="left" bgcolor="#ffffff"> <!--[if (gte mso 9)|(IE)]> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="left" valign="top" width="600"> <![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <!-- start copy --> <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: "Source Sans Pro", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"> <p style="margin: 0;">Se ha realizado una nueva compra desde la aplicación.</p> </td> </tr> <!-- end copy --><b>',
      };
      sendgrid.send(msg);
      res.status(201).json({
        success: true,
        message: 'Transaccion creada correctamente',
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Error al registrar la transaccion',
        data: err,
      });
    }
  });
};

exports.getTransaccionByUser = function (req, res) {
  Transaccion.getByUserId({ usuario: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getAll = function (req, res) {
  Transaccion.getAll({}, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getById = function (req, res) {
  Transaccion.getById({ _id: req.params.id }, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};
