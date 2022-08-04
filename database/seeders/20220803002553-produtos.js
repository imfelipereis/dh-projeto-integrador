'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('admin', [{
        nome: "Usuario Administrativo",
        geracao: 'admin@admin.com.br',
        preco: "",
        cor: "",
        estoque: "",
        descricao: "",
        img_produto: "",


    }], {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
