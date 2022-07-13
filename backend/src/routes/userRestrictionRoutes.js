const express = require('express');
const userRestrictionController = require('../controllers/userRestrictionController');
const authMiddlewares = require('../middlewares/authorization');
const userRestrictionRouter = express.Router();

// GETs
userRestrictionRouter.get('/:cod_usuario', userRestrictionController.getUserRestriction);

// POSTs
userRestrictionRouter.post('/:cod_usuario', userRestrictionController.postUserRestriction);

// DELETEs
userRestrictionRouter.delete('/:cod_usuario', userRestrictionController.deleteUserRestriction);

module.exports = userRestrictionRouter;