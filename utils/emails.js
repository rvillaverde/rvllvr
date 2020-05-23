import fetch from 'node-fetch'

const apiUrl = 'https://rvllvr.herokuapp.com/email';
// const apiUrl = 'http://localhost:3000/email';

export async function sendContactEmail(contact) {
  const res = await fetch(`${ apiUrl }/contact`, {
    method: 'POST',
    body: contact
  });
  return await res
}
