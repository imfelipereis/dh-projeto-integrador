'use strict';

const bcrypt = require ("bcryptjs");


module.exports = {
  async up (queryInterface, Sequelize) {
    const senhaPadrao = bcrypt.hashSync("123456")
      await queryInterface.bulkInsert('admin', [{
        nome: "Usuario Administrativo",
        email: 'admin@admin.com.br',
        senha: senhaPadrao

    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, {});
  }
};
