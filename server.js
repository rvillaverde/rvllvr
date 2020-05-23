require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const next = require('next');
const models = require('./src/models');

const port =  process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const authRouter = require('./src/routes/authRouter.js')
const skillRouter = require('./src/routes/skillRouter.js')
const projectRouter = require('./src/routes/projectRouter.js')
const projectImageRouter = require('./src/routes/projectImageRouter.js')

app.prepare().then(() => {
  const server = express()

  server.use(cors());
  server.use(express.json());
  server.use(fileUpload({
    createParentPath: true
  }));

  server.use('/auth', authRouter);
  server.use('/skills', skillRouter);
  server.use('/projects', projectRouter);
  server.use('/projects/image', projectImageRouter);

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
