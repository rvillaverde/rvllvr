const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = process.env.JWT_SECRET;
const jwtSaltRounds = 10;
const UserService = require('../services/userService');

router.use('/validate', (req, res, next) => {
  const token = req.headers.authorization
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ "msg": err.message })
    }
    next()
  });
});

router.post('/login', async (req, res) => {
  const user = await UserService.findByField({ username: req.body.username });

  if (user) {
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if (result == true) {
        const token = jwt.sign({ "username": req.body.username }, jwtSecret, { expiresIn: 60 * 60 * 24 * 7 })
        res.status(200).send({ token: token })
      } else {
        res.sendStatus(403)
      }
    });
  } else {
    res.sendStatus(403)
  }
})

router.post('/validate', (req, res) => {
  res.status(200).send({ message: 'valid token' })
})

module.exports = router;
