import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import next from 'next';
import resume from './src/routes/resume';

dotenv.config();

const port = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log('-- port:', port);
console.log('-- env:', process.env.NODE_ENV);

app.prepare().then(() => {
  const server = express();

  server.use(express.static('public'));
  server.use(cors());
  server.use(express.json());
  server.use('/resume', resume);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> App ready on http://localhost:${port}`);
  });
});
