'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transaction', { 
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isIn: [['debit', 'credit']],
        },
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
      account_ID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Account',
          key: 'id'
        }
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaction');
     
  }
};
