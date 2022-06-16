const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/findAll', userController.getAllUsers);
router.get('/findByUsername/:username', userController.getUserByUserName);
router.get('/findByUserId/:id', userController.getUserByUserId);
router.get('/findUsersActive', userController.getUsersActive);
router.get('/findUsersInactive', userController.getUsersInactive);
router.post('/createUser', userController.createUser);
router.put('/setUserInactive/:id', userController.setUserInactive);
router.put('/setUserActive/:id', userController.setUserActive);
router.put('/updateAccessUser/:id', userController.updateAccessUser);
router.put('/updateUser/:id', userController.updateUser);

module.exports = router;