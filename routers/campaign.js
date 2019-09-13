const { saveCampaign, updateCampaign } = require('./../services/campaignService');
const bodyParser = require('body-parser');

exports.baseContextRoute = (req, res) => {
    res.send("/ API invoked.");
}

exports.getCampaignRoute = (req, res) => {
    res.send("GET /campaign API invoked.");
}

exports.saveCampaignRoute = (req, res) => {
    // var a = bodyParser.json(req.body);
    // var json = JSON.stringify(bodyParser.json(req.body));
    console.log(bodyParser.json(req.body));
    res.send(saveCampaign());
}

exports.updateCampaignRoute = (req, res) => {
    
    res.send(updateCampaign());
}