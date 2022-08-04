'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable("produtos", {

      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      nome: { type: Sequelize.STRING(200), allowNull: true },
      geracao: { type: Sequelize.STRING(200), allowNull: true },
      preco: { type: Sequelize.STRING(200), allowNull: true },
      cor: { type: Sequelize.STRING(200), allowNull: true },
      estoque: { type: Sequelize.STRING(75), allowNull: true, unique: true },
      descricao: { type: Sequelize.STRING(400), allowNull: true },
      img_produto: { type: Sequelize.STRING(100), allowNull: true },
    
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    
    });
},

async down (queryInterface, Sequelize) {
  await  queryInterface.dropTable("produtos")
}
}; 

