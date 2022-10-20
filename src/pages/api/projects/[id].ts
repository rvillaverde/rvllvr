import { NextApiRequest, NextApiResponse } from 'next';
import projectService from '../../../services/project';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    const project = await projectService.get(Number(id));

    res.status(200).json(project);
  }
};

export default handler;
