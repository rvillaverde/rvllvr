'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        first_name: 'admin',
        last_name: 'admin',
        username: 'admin',
        email: 'admin@admin.com',
        password: '$2b$08$L29l5i4bhfF0CH4UsPub4eq0KE8X5xPPrS4D9fVe7.xnOktHfknNK',
        role: 'admin',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
