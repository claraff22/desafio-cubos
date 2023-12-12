'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Card', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['physical', 'virtual']],
        },
    },
    number: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    cvv: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Card')
    
  }
};
