const EmailService = require('../services/emailService');

const express = require('express');
const router = express.Router();

// POST method to send contact email
router.post('/contact', function(request, response) {
  console.log(request.body)
  let contact = request.body;

  EmailService.sendContactEmail(contact).then(function(res, error) {
    response.sendStatus(200);
  }).catch(function(error) {
    response.status(500).send(error);
  });
});

// POST method to send custom message
router.post('/custom', async function(request, response) {
  let to = request.body.to;
  let subject = request.body.subject;
  let body = { title: request.body.title, message: request.body.message };

  await EmailService.sendCustomEmail(to, subject, body);
  response.sendStatus(200);
});

module.exports = router;
