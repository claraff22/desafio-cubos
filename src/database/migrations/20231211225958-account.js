'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Account', 
    { 
      id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.STRING(150),
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    branch: {
      type: Sequelize.INTEGER,
      allowNull: false,
      
    },
    account: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: true
    },
    balance: {
      allowNull: true,
      type: Sequelize.FLOAT,
      defaultValue: '0.00'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }, 
    });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Account');
    
  }
};
