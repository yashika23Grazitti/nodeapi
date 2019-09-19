'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventLocation = sequelize.define('EventLocation', {
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    address: DataTypes.TEXT,
    postalCode: DataTypes.INTEGER
  }, {});
  EventLocation.associate = function(models) {
    // associations can be defined here
  };
  return EventLocation;
};