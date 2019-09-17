'use strict';
module.exports = (sequelize, DataTypes) => {
  const contactDetails = sequelize.define('contactDetails', {
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    alternate: DataTypes.STRING,
    landline: DataTypes.STRING
  }, {});
  contactDetails.associate = function(models) {
    // associations can be defined here
  };
  return contactDetails;
};