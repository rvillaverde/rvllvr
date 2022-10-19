import { NextApiRequest, NextApiResponse } from 'next';
import skillService from '../../../services/skill';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const skills = await skillService.list();

    res.status(200).json(skills);
  }
};

export default handler;
