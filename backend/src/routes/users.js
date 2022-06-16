const express = require('express');
const userController = require('../controllers/userController')

var router = express.Router();


// updater users
router.put('/:id', userController.updateUser);
router.post('/', userController.createUser);

router.get('/', userController.getAllUsers);

module.exports = router;
