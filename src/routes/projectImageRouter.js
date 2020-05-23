const express = require('express');
const router = express.Router();

const ProjectImageService = require('../services/projectImageService');

router.post('/delete', async(req, res) => {
  let image_id = req.body.id;
  let deleted = await ProjectImageService.deleteProjectImage(image_id);
  res.status(200).send({ deleted });
})

module.exports = router;
