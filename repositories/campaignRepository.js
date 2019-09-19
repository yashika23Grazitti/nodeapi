const Campaign = require('../models').campaign;
const contactDetails = require('../models').contactDetails;
// const Campaign = models.campaign;

exports.createCampaign = (entity) => {
    var contactEntity = entity.contact;
    console.log("Contact Details: ", contactEntity);
    // Campaign.create(entity, 
    //     (err) => console.log(`Error while saving campaign: ${err.message}`));

    //This will save the contact also if it found the contact in the campaign entity.
    Campaign.create(entity, {
        include: [
            {
                association: "contact"
            },
            {
                association: "eventLocation"
            },
            {
                association: "trekFact"
            },
            {
                association: "itineraries"
            }
        ]
    });
}

exports.findAllCampaigns = () => {
    var response;
    // console.log("Result set :", all);

    //WORKING
    // Campaign.findAll({where: {contactId: 2}}).then((result) => {
    //     console.log(JSON.stringify(result));
    // }).catch((error) => {
    //     console.error("Error: ", error);
    //     //throw Error("Error!!");
    // });
    Campaign.findAll().then((result) => {
        console.log(JSON.stringify(result));
        response = result;
    }).catch((error) => {
        console.error("Error: ", error);
        //throw Error("Error!!");
    });
    return response;
}

exports.findCampaignById = (id,callback) => {
    console.log("Campaign Id :", id);
    var response = Campaign.findByPk(id).then((res) => { 
        console.log(JSON.stringify(res))
        callback(null, res);
    });
}