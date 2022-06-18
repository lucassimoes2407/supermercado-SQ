const express = require('express');
const userRestrictionController = require('../controllers/userRestrictionController');

const userRestrictionRouter = express.Router();

userRestrictionRouter.get('/:cod_usuario', userRestrictionController.getUserRestriction);
userRestrictionRouter.post('/:cod_usuario', userRestrictionController.postUserRestriction);
userRestrictionRouter.delete('/:cod_usuario', userRestrictionController.deleteUserRestriction);

module.exports = userRestrictionRouter;