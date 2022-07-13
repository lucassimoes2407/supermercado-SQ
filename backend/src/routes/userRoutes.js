const express = require('express');
const userController = require('../controllers/userController');
const authMiddlewares = require('../middlewares/authorization');
const router = express.Router();

//userGets
router.get('/',   userController.getAllUsers);
router.get('/username/:username',   userController.getUserByUserName);
router.get('/id/:id',   userController.getUserByUserId);
router.get('/findUsersActive',   userController.getUsersActive);
router.get('/findUsersInactive',   userController.getUsersInactive);

//userPost
router.post('/', userController.createUser);
router.post('/login', userController.login);
router.post('/logout',   userController.logout);

//userUpdates
router.put('/setUserActiveAttribute/:id',   userController.setUserActiveAttribute);
router.put('/:id',   userController.updateUser);

//userDeletes
router.delete('/id/:id', userController.deleteUserByUserId);

module.exports = router;