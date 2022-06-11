const express = require('express');
const restrictionController = require('../controllers/restriction');

const restrictionRouter = express.Router();

restrictionRouter.post('/', restrictionController.postRestriction);
restrictionRouter.get('/', () => {}); //TODO 
restrictionRouter.delete('/', () => {}); //TODO
restrictionRouter.patch('/', () => {}); //TODO
restrictionRouter.put('/', () => {}); //TODO

module.exports = restrictionRouter;