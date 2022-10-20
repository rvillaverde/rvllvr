import { Project } from '../../types/project';

const projectApi = {
  get: async (id: Project['id']): Promise<Project> => {
    const res = await fetch(`/api/projects/${id}`);
    return await res.json();
  },

  list: async (): Promise<Project[]> => {
    const res = await fetch('/api/projects');
    return await res.json();
  },
};

export default projectApi;
