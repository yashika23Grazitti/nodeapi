const Campaign = require('../models').campaign;
const ContactDetails = require('../models').contactDetails;
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelizeObject;
if (config.use_env_variable) {
    sequelizeObject = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelizeObject = new Sequelize(config.database, config.username, config.password, config);
}

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

exports.findAllCampaigns = (callback) => {
    Campaign.findAll({include: ['contact', 'itineraries']}).then((result) => {
        //console.log(JSON.stringify(result));
        callback(null, result);
    }).catch((error) => {
        console.log("Error getting all campaigns from db: ", error.message);
        callback(error, null);
    });
}

exports.findCampaignById = (id, callback) => {
    console.log("Campaign Id :", id);
    Campaign.findByPk(id, {include: ['contact', 'itineraries']}).then((res) => { 
        //console.log(JSON.stringify(res))
        callback(null, res);
    }).catch((error) => {
        console.log("Error getting campaign by id from db: ", error.message);
        callback(error, null);
    });
}

exports.findCampaignByIdByNativeQuery = (id, callback) => {
    console.log("Campaign Id :", id);
    //console.log("DB: ", sequelizeObject);
    //The first object is the result object, the second is the metadata object 
    //(containing affected rows etc) - but in mysql, those two are equal.
    //Passing { type: Sequelize.QueryTypes.SELECT } as the second argument will give 
    //you a single result object (metadata object omitted).
    sequelizeObject.query("select c.* from hh.campaigns c where c.id = " + id, { 
        type: Sequelize.QueryTypes.SELECT
    }).then(res => {
        console.log("Native Response!", res);
        callback(null, res);
    }).catch(error => {
        console.log("Error getting campaign by id from db: ", error.message);
        callback(error, null);
    });
}

exports.updateCampaignById1 = (id, body, callback) => {
    console.log("Campaign Id :", id);
    // Campaign.update({ title: "Updated Title" },{ where: { id: id }}).then((res) => {
    return sequelizeObject.transaction(trans => {
        Campaign.update(body, { where: { id: id }}, { transaction: trans }).then((res) => {
            //console.log(JSON.stringify(res))
            if (body.contact) {
                //updateContact(body.contact, trans);
                ContactDetails.update(body.contact, { where: 
                    { 
                        id: 2/0 
                    }}, { transaction: trans }).then(res => console.log("Contact Updated."));
            }
            callback(null, res);
        }).catch((error) => {
            console.log("Error updating campaign by id from db: ", error.message);
            callback(error, null);
        });
    });
    
}

function updateContact(data, trans) {
    //data.id
    // if (!data.id) {
    //     throw new Error("Contact id is not present.");
    // }
    ContactDetails.update(data, { where: 
        { 
            id: 2/0 
        }}, { transaction: trans }).then(res => console.log("Contact Updated."));
}

exports.updateCampaignById = (id, body, callback) => {
    console.log("Campaign Id :", id);
    return sequelizeObject.transaction(trans => {
        return Campaign.update(body, { where: { id: id }, transaction: trans}).then((res) => {
            //console.log(JSON.stringify(res));
            callback(null, res);
        }).catch((error) => {
            console.log("Error updating campaign by id from db: ", error.message);
            callback(error, null);
        });
    });
    // Campaign.update({ title: "Updated Title" },{ where: { id: id }}).then((res) => {
    
}

exports.findCampaignByIdByPromise = (id) => {
    console.log("Campaign Id :", id);
    return new Promise((resolve, reject) => {
        Campaign.findByPk(id, {include: ['contact', 'itineraries']}).then((res) => { 
            //console.log(JSON.stringify(res))
            resolve(res);
        }).catch((error) => {
            console.log("Error getting campaign by id from db: ", error.message);
            reject(error);
        });
        
    });
    
}