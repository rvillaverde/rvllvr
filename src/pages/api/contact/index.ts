import { NextApiRequest, NextApiResponse } from 'next';
import emailService from '../../../services/email';
import { Contact } from '../../../types/contact';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { body } = req;

    if (body.contact) {
      const contact = body.contact as Contact;

      emailService.contact(contact);

      res.send(200);
    } else {
      res.status(400).send({ error: 'UNDEFINED_CONTACT' });
    }
  }
};

export default handler;
