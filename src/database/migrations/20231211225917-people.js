'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('People', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      document: {
          type: Sequelize.STRING(14),
          allowNull: false,
          unique: true
      },
      password: {
          allowNull: false,
          type: Sequelize.STRING(150),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      })
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('People');
    
  }
};

