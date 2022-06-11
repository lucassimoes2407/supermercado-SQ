const resetDatabase = require('../controllers/seederController')
const express = require('express');

var seedRouter = express.Router();

seedRouter.put('/resetDatabase/', resetDatabase)

module.exports = seedRouter; 