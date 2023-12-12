'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Card', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING(150),
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
    type: {
        type: Sequelize.ENUM('physical, virtual'),
        allowNull: false,
        
    },
    number: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    cvv: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Card')
    
  }
};
