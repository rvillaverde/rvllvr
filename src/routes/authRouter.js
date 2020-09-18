const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');
const bcryptHelper = require('../helpers/bcryptHelper');
const authHelper = require('../helpers/authHelper');

router.use('/validate', async (req, res, next) => {
  const { authorization } = req.headers
  const { decoded } = await authHelper.validate(authorization)

  if (decoded) {
    next()
  } else {
    return res.status(401).json({ msg: 'Unauthorized' })
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await UserService.findByField({ username });

  if (user) {
    const isValid = await bcryptHelper.compare(password, user.password)
    if (isValid) {
      const token = authHelper.getToken(username)
      res.status(200).send({ token, user })
    } else {
      res.sendStatus(403)
    }
  } else {
    res.sendStatus(403)
  }
})

router.post('/validate', (req, res) => {
  res.status(200).send({ message: 'valid token' })
})

module.exports = router;
