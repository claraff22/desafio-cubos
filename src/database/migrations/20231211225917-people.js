'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('People', {
      name: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      document: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
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

