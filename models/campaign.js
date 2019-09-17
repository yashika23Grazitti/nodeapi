'use strict';
module.exports = (sequelize, DataTypes) => {
  const campaign = sequelize.define('campaign', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  campaign.associate = function(models) {
    campaign.belongsTo(models.contactDetails, {as: "contact"});
  };
  return campaign;
};