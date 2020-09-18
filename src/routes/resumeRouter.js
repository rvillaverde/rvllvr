const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const RESUME_PATH = path.join(__dirname, '/../../public/files/Romina_Villaverde_Bacskay.pdf')

router.get('/', function(req, res) {
  fs.readFile(RESUME_PATH, (err, data) => {
    if (err) {
      console.log('Error reading pdf:', err)
      res.sendStatus(500)
    } else {
      res.contentType('application/pdf')
      res.send(data)
    }
  })
})

module.exports = router
