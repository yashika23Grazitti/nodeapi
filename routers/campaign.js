const { saveCampaign, updateCampaign } = require('./../services/campaignService');

exports.baseContextRoute = (req, res) => {
    let response = {status: "okay"}
    res.send(response);
}

exports.getCampaignRoute = (req, res) => {
    res.send("GET /campaign API invoked.");
}

exports.saveCampaignRoute = (req, res) => {
    // var a = bodyParser.json(req.body);
    // var json = JSON.stringify(bodyParser.json(req.body));
    console.log("Request Body: ", req.body);
    res.send(saveCampaign());
}

exports.updateCampaignRoute = (req, res) => {
    
    res.send(updateCampaign());
}
