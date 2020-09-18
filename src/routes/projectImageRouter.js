const express = require('express');
const router = express.Router();

const ProjectImageService = require('../services/projectImageService');

router.delete('/', async(req, res) => {
  let { id } = req.body;
  let deleted = await ProjectImageService.deleteProjectImage(id);
  res.status(200).send({ deleted });
})

module.exports = router;
