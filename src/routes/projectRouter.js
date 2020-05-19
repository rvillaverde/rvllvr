const express = require('express');
const router = express.Router();

const ProjectService = require('../services/projectService');

router.get('/', async(req, res) => {
  let projects = await ProjectService.getProjects();
  res.status(200).send(projects);
})

router.post('/', async(req, res) => {
  let project = req.body;
  let savedProject = await ProjectService.createProject(project);
  res.status(200).send(savedProject);
})

router.post('/:id/edit', async(req, res) => {
  let id = req.params.id;
  let fields = req.body;
  let updated = await ProjectService.updateProject(id, fields);
  res.status(200).send({ updated });
})

router.post('/delete', async(req, res) => {
  let project_id = req.body.id;
  let deleted = await ProjectService.deleteProject(project_id);
  res.status(200).send({ deleted });
})

module.exports = router;
