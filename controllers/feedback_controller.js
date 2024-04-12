'use strict';

const Feedback = require('../models/feedback');
const User = require('../models/user')

const emailService = require('../services/email/index')

exports.create = function (req, res) {
  Feedback.create(req.body, async function (err, result) {
    if (!err) {
      const user = await User.findById(result.usuario)
      const templateEmail = emailService.templatesEmailEnums.FEEDBACK
      emailService.sendEmail(templateEmail, { user,  feedback: result})
      
      res.status(201).json({
        success: true,
        message: 'Feedback creado correctamente',
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Error al registrar el Feedback',
        data: err,
      });
    }
  });
};

exports.getByUserId = function (req, res) {
  Feedback.getByUserId({ usuario: req.params.id }, function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};

exports.getAll = function (req, res) {
  Feedback.getAll({}, function (err, result) {
    if (!err) {
      return res.json({ data: result });
    } else {
      return res.send(err); // 500 error
    }
  });
};
