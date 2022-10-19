import { Skill } from '../../types/skill';

const skillApi = {
  list: async (): Promise<Skill[]> => {
    const res = await fetch('api/skills');
    return await res.json();
  },
};

export default skillApi;
