const { getData, postData } = require('../services/dummyService');

const express = require('express');

const router = express.Router();

//The Best way
router.get("/get", getData);

router.post("/post", postData);

module.exports = router;

