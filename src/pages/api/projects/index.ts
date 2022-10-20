import { NextApiRequest, NextApiResponse } from 'next';
import projectService from '../../../services/project';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const projects = await projectService.list();

    res.status(200).json(projects);
  }
};

export default handler;
