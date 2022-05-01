const bcryptjs = require('bcryptjs');

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'john@doe.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Jane Doe',
      email: 'jane@doe.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down() {},
};
