const express = require('express');
const restrictionController = require('../controllers/restrictionController');
const authMiddlewares = require('../middlewares/authorization');
const restrictionRouter = express.Router();

// GETs
restrictionRouter.get('/', restrictionController.getAllRestriction);
restrictionRouter.get('/cod/:cod_restricao', restrictionController.getRestrictionByCod);
restrictionRouter.get('/name/', restrictionController.getCodRestrictionByName);

// POSTs
restrictionRouter.post('/', authMiddlewares.verifyJWT, restrictionController.postRestriction);

// PUTs
restrictionRouter.put('/:cod_restricao', authMiddlewares.verifyJWT, restrictionController.putRestriction);

// DELETEs
restrictionRouter.delete('/:cod_restricao', authMiddlewares.verifyJWT, restrictionController.deleteRestriction);

module.exports = restrictionRouter;