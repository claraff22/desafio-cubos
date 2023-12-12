'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Account', 
    { 
      id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    branch: {
      type: Sequelize.STRING(3),
      allowNull: false,
      
    },
    account: {
      allowNull: false,
      type: Sequelize.STRING,
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
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }, 
    people_ID: {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'People',
        key: 'id'
      }
    }

    });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Account');
    
  }
};
