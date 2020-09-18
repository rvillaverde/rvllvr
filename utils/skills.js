import fetch from 'node-fetch'

const apiUrl = `${ process.env.API_ENDPOINT }/skills`

export async function createSkill(skill) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(skill),
    headers: { 'Content-Type': 'application/json' }
  })

  return await res.json()
}

export async function getSkills() {
  const res = await fetch(apiUrl)
  return await res.json()
}

export async function editSkill(id, fields) {
  const res = await fetch(`${ apiUrl }/${ id }`, {
    method: 'PUT',
    body: JSON.stringify({ fields }),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}

export async function deleteSkill(id) {
  const res = await fetch(apiUrl, {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}
