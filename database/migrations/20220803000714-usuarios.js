'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable("usuarios", {

      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      nome: { type: Sequelize.STRING(200), allowNull: true },
      sobrenome: { type: Sequelize.STRING(200), allowNull: true },
      cpf: { type: Sequelize.STRING(200), allowNull: true },
      email: { type: Sequelize.STRING(75), allowNull: true, unique: true },
      senha: { type: Sequelize.STRING(100), allowNull: true },
      telefone: { type: Sequelize.STRING(100), allowNull: true },
      cep: { type: Sequelize.STRING(100), allowNull: true },
      logradouro: { type: Sequelize.STRING(100), allowNull: true },
      numero: { type: Sequelize.STRING(100), allowNull: true },
      complemento: { type: Sequelize.STRING(100), allowNull: true },
      bairro: { type: Sequelize.STRING(100), allowNull: true },
      

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    
    });
},


async down (queryInterface, Sequelize) {
  await  queryInterface.dropTable("usuarios")
}
}; 
