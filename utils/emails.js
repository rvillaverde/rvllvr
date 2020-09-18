import fetch from 'node-fetch'

const apiUrl = `${ process.env.API_ENDPOINT }/email`

export async function sendContactEmail(contact) {
  const res = await fetch(`${ apiUrl }/contact`, {
    method: 'POST',
    body: contact
  });
  return await res
}
