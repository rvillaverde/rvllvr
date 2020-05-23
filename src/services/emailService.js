const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_URL 
});

const bcc_email = process.env.EMAIL;
const email = process.env.EMAIL;

function sendEmail(emailData) {
  return new Promise(function(resolve, reject) {
    mailgun.messages().send(emailData, function (error, body) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log(body);
        resolve(body);
      }
    });
  });
}

class EmailService {
  static sendContactEmail(contact) {
    console.log(contact)
    let emailData = {
      from: 'Romi Villaverde Web <no-reply@romivillaverde.com>',
      to: email,
      subject: `[RVLLVR] Nuevo mensaje de ${ contact.name }`,
      template: 'contact_email',
      'h:Reply-To': contact.email,
      'h:X-Mailgun-Variables': JSON.stringify({ contact: contact })
    };

    return sendEmail(emailData);
  }
}

module.exports = EmailService;
