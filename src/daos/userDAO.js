const models  = require('../models');

module.exports = {
  getUsers: function() {
    return new Promise((resolve, reject) => {
      models.user.findAll().then(users => {
        resolve(users);
      }).catch(err => {
        reject(err);
      });
    });
  },
  getUser: function(id) {
    return new Promise((resolve, reject) => {
      models.user.findByPk(id).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  },
  findByField: function(field) {
    return new Promise((resolve, reject) => {
      models.user.findAll({
        where: field
      }).then(users => {
        resolve(users[0]);
      }).catch(err => {
        reject(err);
      });
    });
  },
  createUser: function(user) {
    return new Promise(async (resolve, reject) => {
      models.user.create(user).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  }
};
