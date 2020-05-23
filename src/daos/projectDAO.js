const models  = require('../models');

module.exports = {
  getProjects: function() {
    return new Promise((resolve, reject) => {
      models.project.findAll({
        include: [{ model: models.project_image, as: 'images' }]
      }).then(projects => {
        resolve(projects);
      }).catch(err => {
        reject(err);
      });
    });
  },
  getProject: function(id) {
    return new Promise((resolve, reject) => {
      models.project.findByPk(id, {
        include: [{ model: models.project_image, as: 'images' }]
      }).then(project => {
        resolve(project);
      }).catch(err => {
        reject(err);
      });
    });
  },
  createProject: function(project) {
    return new Promise(async (resolve, reject) => {
      models.project.create(project).then(project => {
        resolve(project);
      }).catch(err => {
        reject(err);
      });
    });
  },
  updateProject: function(id, fields) {
    return new Promise(async (resolve, reject) => {
      models.project.update(
        fields,
        { where: { project_id: id } }
      ).then(updated => {
        resolve(updated[0]);
      }).catch(err => {
        reject(err);
      });
    });
  },
  deleteProject: function(id) {
    return new Promise(async (resolve, reject) => {
      models.project.destroy({
        where: { project_id: id }
      }).then(deleted => {
        resolve(deleted);
      }).catch(err => {
        reject(err);
      });
    });
  }
};
