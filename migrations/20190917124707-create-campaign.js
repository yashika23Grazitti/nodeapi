'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      contactId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'contactDetails',
          key: 'id'
        }
      },
      eventLocationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'EventLocations',
          key: 'id'
        }
      },
      trekFactId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'TrekFacts',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campaigns');
  }
};