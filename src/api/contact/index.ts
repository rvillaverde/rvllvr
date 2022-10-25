import { Contact } from '../../types/contact';

const contactApi = {
  send: async (contact: Contact) => {
    const res = await fetch('api/contact', {
      body: JSON.stringify({ contact }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    return res;
  },
};

export default contactApi;
