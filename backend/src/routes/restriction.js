const express = require('express');
const restrictionController = require('../controllers/restriction');

const restrictionRouter = express.Router();

restrictionRouter.post('/', restrictionController.postRestriction);
restrictionRouter.get('/', restrictionController.getAllRestriction);
restrictionRouter.delete('/:cod_restricao', restrictionController.deleteRestriction);
restrictionRouter.patch('/', () => {}); //TODO
restrictionRouter.put('/', () => {}); //TODO

module.exports = restrictionRouter;