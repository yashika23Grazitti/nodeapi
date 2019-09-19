'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrekFacts = sequelize.define('TrekFacts', {
    type: DataTypes.STRING,
    altitude: DataTypes.INTEGER,
    roadHead: DataTypes.TEXT,
    basecamp: DataTypes.STRING,
    railHead: DataTypes.TEXT
  }, {});
  TrekFacts.associate = function(models) {
    // associations can be defined here
  };
  return TrekFacts;
};