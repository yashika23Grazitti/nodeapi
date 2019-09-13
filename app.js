const express = require('express');
const {baseContextRoute, getCampaignRoute, saveCampaignRoute, 
    updateCampaignRoute} = require('./routers/campaign');

const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//Configure the server
const app = express();

//Configure the Middleware(Morgan) -- It works similar as an Interceptors/Filters in JAVA.
app.use(morgan("dev"));

//Confi
app.use(morgan("dev"));

app.get("/", baseContextRoute);

app.get("/campaign", getCampaignRoute);

app.post("/campaign", saveCampaignRoute);

app.put("/campaign", updateCampaignRoute);

const port = 3000;

app.listen(port, () => console.log(`Node server is running on port : ${port}`));

var connectionManager = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

connectionManager.connect((err, success) => {
    if(err) console.log(`MySQL failed to connect : ${err.message}`);
    console.log("MySQL connected!!!");
});