const express = require('express');
const restrictionController = require('../controllers/restriction');

const restrictionRouter = express.Router();

restrictionRouter.post('/', restrictionController.postRestriction);
restrictionRouter.get('/', restrictionController.getAllRestriction);
restrictionRouter.get('/cod/:cod_restricao', restrictionController.getRestrictionByCod);
restrictionRouter.get('/name/', restrictionController.getCodRestrictionByName);
restrictionRouter.delete('/:cod_restricao', restrictionController.deleteRestriction);
restrictionRouter.put('/:cod_restricao', restrictionController.putRestriction);

module.exports = restrictionRouter;