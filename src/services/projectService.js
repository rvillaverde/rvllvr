const ProjectDAO = require('../daos/projectDAO')

class ProjectService {
  static async getProjects() {
    let projects = [];
    for(var i = 0; i < 9; i++){
      projects.push({project_id: i, name: 'Parmenia', technologies: 'Material IO, HTML, CSS, Jquery'});
    }
    return new Promise(function(resolve, reject) {
      resolve(projects);
    });
    //return await ProjectDAO.getProjects();
  }

  static async getProject(id) {
    return await ProjectDAO.getProject(id);
  }

  static async createProject(project) {
    return await ProjectDAO.createProject(project, { returning: true });
  }

  static async updateProject(id, fields) {
    return await ProjectDAO.updateProject(id, fields);
  }

  static async deleteProject(id) {
    return await ProjectDAO.deleteProject(id);
  }
}

module.exports = ProjectService;
