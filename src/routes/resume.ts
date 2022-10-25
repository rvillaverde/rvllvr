import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const PATH = path.join(
  path.resolve('./public'),
  './files/Romina_Villaverde_Bacskay.pdf',
);

router.get('/', (_, res) => {
  fs.readFile(PATH, (err, data) => {
    if (err) {
      console.log('Error reading pdf:', err);
      res.sendStatus(500);
    } else {
      res.contentType('application/pdf');
      res.send(data);
    }
  });
});

export default router;
