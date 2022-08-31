'use strict';

const bcrypt = require('bcrypt')
const saltround = 10

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      fullname: 'User 1',
      email: 'user1@gmail.com',
      password: this.hashit('user1@gmail.com'),
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  hashit(password) {
    let hash = bcrypt.hashSync(password, saltround)
    return hash
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
