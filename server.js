require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const next = require('next');
const bcrypt = require('bcrypt');

const jwtSecret = process.env.JWT_SECRET;
const jwtSaltRounds = 10;

const models = require('./src/models');
const UserService = require('./src/services/userService');

const port =  process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(cors());
  server.use(express.json());
  server.use(fileUpload({
    createParentPath: true
  }));

  server.use('/auth/validate', (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ "msg": err.message })
      }
      next()
    });
  });

  server.post('/auth/login', async (req, res) => {
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

  server.post('/auth/validate', (req, res) => {
    res.status(200).send({ message: 'valid token' })
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  models.sequelize.sync().then(function () {
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  });
});
