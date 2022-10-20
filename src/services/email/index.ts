import { NodeMailgun } from 'ts-mailgun';
import { Contact } from '../../types/contact';
import { EmailData } from '../../types/email-data';

const CONTACT_TEMPLATE = 'contact_email';
const FROM_TITLE = 'Romi Villaverde Web';
const { EMAIL, MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;

const mailer = new NodeMailgun();
mailer.apiKey = MAILGUN_API_KEY as string;
mailer.domain = MAILGUN_DOMAIN as string;
mailer.fromEmail = EMAIL as string;
mailer.fromTitle = FROM_TITLE;

mailer.init();
const template = mailer.getTemplate(CONTACT_TEMPLATE);

console.log('*** mailgun template', template);

const sendEmail = async (emailData: EmailData) => {
  const { to, variables } = emailData;

  if (typeof template !== 'boolean') {
    mailer.sendFromTemplate(to, template, variables);
  }
  // return new Promise((resolve, reject) => {
  //   mailgun.
  //   mailgun.messages().send(emailData, (error, body) => {
  //     if (error) {
  //       console.log(error);
  //       reject(error);
  //     } else {
  //       console.log(body);
  //       resolve(body);
  //     }
  //   });
  // });
};

const emailService = {
  contact: async (contact: Contact) => {
    console.log('email service - contact', contact);
    const emailData: EmailData = {
      from: 'Romi Villaverde Web <no-reply@romivillaverde.com>',
      to: EMAIL as string,
      subject: `[RVLLVR] Nuevo mensaje de ${contact.name}`,
      template: CONTACT_TEMPLATE,
      replyTo: contact.email,
      variables: { contact },
      // 'h:Reply-To': contact.email,
      // 'h:X-Mailgun-Variables': JSON.stringify({ contact: contact })
    };

    console.log('email data', emailData);

    // await sendEmail(emailData);
  },
};

export default emailService;
