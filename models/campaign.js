'use strict';
module.exports = (sequelize, DataTypes) => {
  const campaign = sequelize.define('campaign', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    contactId: DataTypes.INTEGER,
    eventLocationId: DataTypes.INTEGER,
    trekFactId: DataTypes.INTEGER
  }, {});
  campaign.associate = function(models) {
    campaign.belongsTo(models.contactDetails, {as: "contact"});
    campaign.belongsTo(models.EventLocation, {as: "eventLocation"});
    campaign.belongsTo(models.TrekFacts, {as: "trekFact"});
    campaign.hasMany(models.Itinerary, {as: "itineraries"});
  };
  return campaign;
};