const Campaign = require('../models').campaign;
const contactDetails = require('../models').contactDetails;
// const Campaign = models.campaign;

exports.createCampaign = (entity) => {
    var contactEntity = entity.contactDetails;
    console.log("Contact Details: ", contactEntity);
    // Campaign.create(entity, 
    //     (err) => console.log(`Error while saving campaign: ${err.message}`));
    
    //This will save the contact also if it found the contact in the campaign entity.
    Campaign.create(entity, {
        include: [{
          association: "contact"
        }] 
    });
}