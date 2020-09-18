const express = require('express')
const router = express.Router()

const SkillService = require('../services/skillService')

router.get('/', async(req, res) => {
  const skills = await SkillService.getSkills()
  res.status(200).send(skills)
})

router.post('/', async(req, res) => {
  const skill = req.body
  const savedSkill = await SkillService.createSkill(skill)
  res.status(200).send(savedSkill)
})

router.put('/:id', async(req, res) => {
  const { params: { id }, body: { fields } } = req
  const updated = await SkillService.updateSkill(id, fields)
  res.status(200).send({ updated })
})

router.delete('/', async(req, res) => {
  const { id } = req.body
  const deleted = await SkillService.deleteSkill(id)
  res.status(200).send({ deleted })
})

module.exports = router
