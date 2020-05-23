const models  = require('../models');

module.exports = {
  getSkills: function() {
    return new Promise((resolve, reject) => {
      models.skill.findAll({
        order: [
          ['order', 'ASC'],
        ]
      }).then(skills => {
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
  },
  updateSkill: function(id, fields) {
    return new Promise(async (resolve, reject) => {
      models.skill.update(
        fields,
        { where: { skill_id: id } }
      ).then(updated => {
        resolve(updated[0]);
      }).catch(err => {
        reject(err);
      });
    });
  },
  deleteSkill: function(id) {
    return new Promise(async (resolve, reject) => {
      models.skill.destroy({
        where: { skill_id: id }
      }).then(deleted => {
        resolve(deleted);
      }).catch(err => {
        reject(err);
      });
    });
  }
};
