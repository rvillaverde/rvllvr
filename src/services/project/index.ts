import Airtable, { AirtableRecord } from '../../lib/airtable';
import { Project } from '../../types/project';

const TABLE = 'project';

const map = (record: AirtableRecord): Promise<Project> => {
  return Promise.resolve({
    coverUrl: record.get('cover_url') as Project['coverUrl'],
    id: record.get('id') as Project['id'],
    images: record.get('id') as Project['images'],
    internalId: record.id,
    internalUrl: record.get('internal_url') as Project['internalUrl'],
    name: record.get('name') as Project['name'],
    order: record.get('order') as Project['order'],
    show: record.get('show') as Project['show'],
    technologies: record.get('technologies') as Project['technologies'],
    type: record.get('type') as Project['type'],
    url: record.get('url') as Project['url'],
    year: record.get('year') as Project['year'],
  });
};

const airtable = new Airtable<Project>(TABLE, map);

const projectService = {
  get: async (id: Project['id']): Promise<Project[]> =>
    airtable.findByField({ id, show: '1' }),
  list: async (): Promise<Project[]> => airtable.selectAll(),
};

export default projectService;
