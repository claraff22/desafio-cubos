'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transaction', { 
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING(150),
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      value: {
          type: Sequelize.FLOAT,
          allowNull: false,
      },
      description: {
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
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaction');
     
  }
};
