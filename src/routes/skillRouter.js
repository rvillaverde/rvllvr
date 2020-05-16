const express = require('express');
const router = express.Router();

const SkillService = require('../services/skillService');

router.get('/', async(req, res) => {
  let skills = await SkillService.getSkills();
  res.status(200).send(skills);
})

router.post('/', async(req, res) => {
  let skill = req.body;
  let savedSkill = await SkillService.createSkill(skill);
  res.status(200).send(savedSkill);
})

router.post('/:id/edit', async(req, res) => {
  let id = req.params.id;
  let fields = req.body;
  let updated = await SkillService.updateSkill(id, fields);
  res.status(200).send({ updated });
})

router.post('/delete', async(req, res) => {
  let skill_id = req.body.id;
  let deleted = await SkillService.deleteSkill(skill_id);
  console.log(deleted)
  res.status(200).send({ deleted });
})

module.exports = router;
