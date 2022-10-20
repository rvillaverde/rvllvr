import { NextApiRequest, NextApiResponse } from 'next';
import emailService from '../../../services/email';
import { Contact } from '../../../types/contact';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { body } = req;
    const contact = JSON.parse(body) as Contact;
    console.log('handler contact', contact);

    emailService.contact(contact);

    res.status(200).json('');
  }
};

export default handler;
