const sendGridCredentials = require('../../config/sendgrid');
const sendgrid = require('@sendgrid/mail');
const templatesGenerator = require('./templates')

sendgrid.setApiKey(sendGridCredentials.apiKey);

const templatesEmailEnums = {
  FEEDBACK: 'feedback'
}

const templatesEmail = {
  feedback: templatesGenerator.feedback
}

function sendEmail(templateSelected, data) {
  if (templatesEmail[templateSelected] === undefined) return 
  const template = templatesEmail[templateSelected](data)
  sendgrid.send(template);
}

module.exports = {
  sendEmail,
  templatesEmail,
  templatesEmailEnums
}