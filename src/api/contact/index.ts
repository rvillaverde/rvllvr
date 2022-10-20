import { Contact } from '../../types/contact';

const contactApi = {
  send: async (contact: Contact) => {
    const res = await fetch('api/contact', {
      method: 'POST',
      body: JSON.stringify(contact),
    });

    return res;
  },
};

export default contactApi;
