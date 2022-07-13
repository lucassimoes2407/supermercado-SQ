const express = require('express');
const restrictionController = require('../controllers/restrictionController');
const authMiddlewares = require('../middlewares/authorization');
const restrictionRouter = express.Router();

// GETs
restrictionRouter.get('/', restrictionController.getAllRestriction);
restrictionRouter.get('/cod/:cod_restricao', restrictionController.getRestrictionByCod);
restrictionRouter.get('/name/', restrictionController.getCodRestrictionByName);

// POSTs
restrictionRouter.post('/', restrictionController.postRestriction);

// PUTs
restrictionRouter.put('/:cod_restricao', restrictionController.putRestriction);

// DELETEs
restrictionRouter.delete('/:cod_restricao', restrictionController.deleteRestriction);

module.exports = restrictionRouter;