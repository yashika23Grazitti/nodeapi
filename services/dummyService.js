exports.getData = (req, res, next) => {
    console.log("Request Params: ", req.query);
    console.log("Request Headers: ", req.headers);
    console.log("Request Body: ", req.body);

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