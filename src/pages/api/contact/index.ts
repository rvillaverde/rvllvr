import { NextApiRequest, NextApiResponse } from 'next';
import emailService from '../../../services/email';
import { Contact } from '../../../types/contact';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { body } = req;

    if (body.contact) {
      const contact = JSON.parse(body.contact) as Contact;
      console.log('handler body', body);
      console.log('handler contact', contact);

      emailService.contact(contact);

      res.status(200).json('');
    } else {
      console.log('no contact in body', body);
      res.status(400).send('');
    }
  }
};

export default handler;
