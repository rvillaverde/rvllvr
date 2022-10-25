import { Contact } from '../../types/contact';

const contactApi = {
  send: async (contact: Contact) => {
    console.log('send - contact', contact);
    console.log('send - contact json', JSON.stringify(contact));

    const res = await fetch('api/contact', {
      body: JSON.stringify({ contact }),
      method: 'POST',
    });

    return res;
  },
};

export default contactApi;
