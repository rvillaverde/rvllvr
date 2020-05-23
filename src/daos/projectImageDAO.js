const models  = require('../models');

module.exports = {
  find: function(id) {
    return new Promise((resolve, reject) => {
      models.project_image.findByPk(id).then(projectImage => {
        resolve(projectImage);
      }).catch(err => {
        reject(err);
      });
    });
  },
  bulkCreate: function(productImages) {
    return new Promise(async (resolve, reject) => {
      models.project_image.bulkCreate(productImages).then(records => {
        resolve(records);
      }).catch(err => {
        reject(err);
      });
    });
  },
  delete: function(id) {
    return new Promise(async (resolve, reject) => {
      models.project_image.destroy({
        where: { image_id: id }
      }).then(deleted => {
        resolve(deleted);
      }).catch(err => {
        reject(err);
      });
    });
  }
};
