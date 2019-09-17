const createCampaignRepo = require("../repositories/campaignRepository").createCampaign;
// const Campaign = require("../models").campaign;

exports.getData = (req, res, next) => {
    console.log("All Request Params/Query Param: ", req.query);
    console.log("All Request Headers: ", req.headers);
    console.log("Request Body: ", req.body);
    console.log("One Request Headers: ", req.header("Auth"));
    console.log("One Request Params/Query Param: ", req.query.id);

    var response = {};
    response.success = true;
    response.message = "Get data.";
    response.data = null;
    console.log("Get data!!");
    res.send(response);
}

exports.postData = (req, res, next) => {
    var body = req.body;
    console.log("Request Body: ", body);
    body.state = "acknowledged"
    var response = {};
    response.success = true;
    response.message = "Post data.";
    response.data = body;
    console.log("Post data!!");
    res.send(response);
}

exports.createCampaign = (req, res, next) => {
    var body = req.body;
    console.log("Request Body: ", body);
    createCampaignRepo(body);
    var response = {};
    response.success = true;
    response.message = "Campaign created successfully.";
    response.data = body;
    console.log("Campaign created successfully.");
    res.send(response);
}