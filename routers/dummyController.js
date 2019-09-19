const { getData, postData, createCampaign, getCampaigns, 
    getCampaignById, updateCampaignById } = require('../services/dummyService');

const express = require('express');

const router = express.Router();

//The Best way
router.get("/get", getData);

router.post("/post", postData);

router.post("/campaign", createCampaign);

router.get("/campaign", getCampaigns);

router.get("/campaign/:id", getCampaignById);

router.put("/campaign/:id", updateCampaignById);

module.exports = router;

