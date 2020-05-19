import fetch from 'node-fetch'

const apiUrl = 'https://rvllvr.herokuapp.com/projects';
// onst apiUrl = 'http://localhost:3000/projects';

export async function createProject(project) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(project),
    headers: { 'Content-Type': 'application/json' }
  });

  return await res.json()
}

export async function getProjects() {
  const res = await fetch(apiUrl)
  return await res.json();
}

export async function editProject(id, fields) {
  const res = await fetch(`${ apiUrl }/${ id }/edit`, {
    method: 'POST',
    body: JSON.stringify(fields),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}

export async function deleteProject(id) {
  const res = await fetch(`${ apiUrl }/delete`, {
    method: 'POST',
    body: JSON.stringify({id}),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}
