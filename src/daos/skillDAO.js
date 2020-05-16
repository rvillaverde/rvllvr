const models  = require('../models');

module.exports = {
  getSkills: function() {
    return new Promise((resolve, reject) => {
      models.skill.findAll().then(skills => {
        resolve(skills);
      }).catch(err => {
        reject(err);
      });
    });
  },
  getSkill: function(id) {
    return new Promise((resolve, reject) => {
      models.skill.findByPk(id).then(skill => {
        resolve(skill);
      }).catch(err => {
        reject(err);
      });
    });
  },
  createSkill: function(skill) {
    return new Promise(async (resolve, reject) => {
      models.skill.create(skill).then(skill => {
        resolve(skill);
      }).catch(err => {
        reject(err);
      });
    });
  }
};
