import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const RESUME_PATH = path.join(
  __dirname,
  '/../../public/files/Romina_Villaverde_Bacskay.pdf',
);

router.get('/', function (_, res) {
  fs.readFile(RESUME_PATH, (err, data) => {
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
