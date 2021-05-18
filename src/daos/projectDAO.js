const models = require("../models");

module.exports = {
  getProjects: () =>
    new Promise((resolve, reject) => {
      models.project
        .findAll({
          include: [{ model: models.project_image, as: "images" }],
        })
        .then((projects) => {
          resolve(projects);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  getProject: (id) =>
    new Promise((resolve, reject) => {
      models.project
        .findByPk(id, {
          include: [{ model: models.project_image, as: "images" }],
        })
        .then((project) => {
          resolve(project);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  findProject: (field) =>
    new Promise((resolve, reject) => {
      models.project
        .findOne({
          include: [{ model: models.project_image, as: "images" }],
          where: field,
        })
        .then((projects) => {
          resolve(projects);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  createProject: (project) =>
    new Promise(async (resolve, reject) => {
      models.project
        .create(project)
        .then((project) => {
          resolve(project);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  updateProject: (id, fields) =>
    new Promise(async (resolve, reject) => {
      models.project
        .update(fields, { where: { project_id: id } })
        .then((updated) => {
          resolve(updated[0]);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  deleteProject: (id) =>
    new Promise(async (resolve, reject) => {
      models.project
        .destroy({
          where: { project_id: id },
        })
        .then((deleted) => {
          resolve(deleted);
        })
        .catch((err) => {
          reject(err);
        });
    }),
};
