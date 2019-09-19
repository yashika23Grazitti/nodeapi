'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define('Itinerary', {
    heading: DataTypes.STRING,
    body: DataTypes.TEXT,
    date: DataTypes.DATE,
    campaignId: DataTypes.INTEGER
  }, {});
  Itinerary.associate = function(models) {
    // associations can be defined here
  };
  return Itinerary;
};