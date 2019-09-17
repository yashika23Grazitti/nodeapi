const { getData, postData, createCampaign } = require('../services/dummyService');

const express = require('express');

const router = express.Router();

//The Best way
router.get("/get", getData);

router.post("/post", postData);

router.post("/campaign", createCampaign);

module.exports = router;

