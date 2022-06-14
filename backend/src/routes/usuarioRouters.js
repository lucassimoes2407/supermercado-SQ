const express = require('express');
const userController = require('../controllers/usuarioController');
const router = express.Router();


router.get('/',userController.getAllUsers );
router.get('/:UserCode',userController.getUserByUserCode);

module.exports = router;