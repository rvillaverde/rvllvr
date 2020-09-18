import fetch from 'node-fetch'

const apiUrl = `${ process.env.API_ENDPOINT }/projects`

export async function getProject(id) {
  const res = await fetch(`${ apiUrl }/${ id }`)
  return res.json()
}

export async function findProject(key, value) {
  const res = await fetch(`${ apiUrl }?${ key }=${ value }`)
  return res.json()
}

export async function getProjects() {
  const res = await fetch(apiUrl)
  return await res.json()
}

export async function createProject(data) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    body: data
  })

  return await res.json()
}

export async function editProject(data) {
  const res = await fetch(apiUrl, {
    method: 'PUT',
    body: data
  })
  return res.json()
}

export async function deleteImage(id) {
  const res = await fetch(`${ apiUrl }/image`, {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}

export async function deleteProject(id) {
  const res = await fetch(apiUrl, {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}
