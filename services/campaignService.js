exports.saveCampaign = () => {
    var response = {};
    response.success = true;
    response.message = "Campaign created successfully.";
    response.data = null;

    return response;
}

exports.updateCampaign = () => {
    var response = {};
    response.success = true;
    response.message = "Campaign updated successfully.";
    response.data = null;

    return response;
}

exports.deleteCampaign = (req, res, next) => {
    var response = {};
    response.success = true;
    response.message = "Campaign deleted successfully.";
    response.data = null;
    console.log("Delete Service Method!!");
    res.send(response);
    //return res.se;
}