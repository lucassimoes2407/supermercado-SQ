const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/findAll', userController.getAllUsers);
router.get('/findByUsername/:username', userController.getUserByUserName);
router.get('/findByUserId/:id', userController.getUserByUserId);
router.post('/createUser', userController.createUser);
router.delete('/deleteAll', userController.deleteAllUsers)
router.delete('/deleteByUsername/:username', userController.deleteUserByUserName);
router.delete('/deleteByUserId/:id', userController.deleteUserByUserId);

module.exports = router;