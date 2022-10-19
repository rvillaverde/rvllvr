import Airtable, { AirtableRecord } from '../../lib/airtable';
import { Skill } from '../../types/skill';

const TABLE = 'skill';

const map = (record: AirtableRecord): Promise<Skill> => {
  return Promise.resolve({
    id: record.get('id') as number,
    internalId: record.id,
    name: record.get('name') as string,
    order: record.get('order') as number,
    rate: record.get('rate') as number,
  });
};

const airtable = new Airtable<Skill>(TABLE, map);

const skillService = {
  list: async (): Promise<Skill[]> => airtable.selectAll(),
};

export default skillService;
