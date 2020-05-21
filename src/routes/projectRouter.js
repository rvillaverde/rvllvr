const express = require('express');
const router = express.Router();

const ProjectService = require('../services/projectService');

router.get('/', async(req, res) => {
  let projects = await ProjectService.getProjects();
  res.status(200).send(projects);
})

router.get('/:id', async(req, res) => {
  let id = req.params.id;
  let project = await ProjectService.getProject(id);
  res.status(200).send(project);
})

router.post('/', async(req, res) => {
  let project = req.body;
  let cover = req.files.cover;
  let savedProject = await ProjectService.createProject(project, cover);
  res.status(200).send(savedProject);
})

router.post('/edit', async(req, res) => {
  let project = req.body;
  let cover = req.files ? req.files.cover : undefined;
  let updated = await ProjectService.updateProject(project, cover);
  res.status(200).send({ updated });
})

router.post('/delete', async(req, res) => {
  let project_id = req.body.id;
  let deleted = await ProjectService.deleteProject(project_id);
  res.status(200).send({ deleted });
})

module.exports = router;
