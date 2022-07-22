'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
      await queryInterface.createTable("admin", {

        id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        nome: { type: Sequelize.STRING(200), allowNull: true },
        email: { type: Sequelize.STRING(75), allowNull: true, unique: true },
        senha: { type: Sequelize.STRING(100), allowNull: true },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
      
      });
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.dropTable("admin")
  }
}; 
