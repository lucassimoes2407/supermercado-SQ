const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

//userGets
router.get('/findAll', userController.getAllUsers);
router.get('/findByUsername/:username', userController.getUserByUserName);
router.get('/findByUserId/:id', userController.getUserByUserId);
router.get('/findUsersActive', userController.getUsersActive);
router.get('/findUsersInactive', userController.getUsersInactive);

//userPost
router.post('/createUser', userController.createUser);

//userUpdates
router.put('/setUserActiveAttribute/:id', userController.setUserActiveAttribute);
//router.put('/updateAccessUser/:id', userController.updateAccessUser);
router.put('/updateUser/:id', userController.updateUser);

//userDeletes
router.delete('/deleteUserByUserName/:username', userController.deleteUserByUserName);
router.delete('/deleteUserByUserId/:id', userController.deleteUserByUserId);

module.exports = router;