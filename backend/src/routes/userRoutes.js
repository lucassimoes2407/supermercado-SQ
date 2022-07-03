const express = require('express');
const userController = require('../controllers/userController');
const authMiddlewares = require('../middlewares/authorization');
const router = express.Router();

//userGets
router.get('/', authMiddlewares.verifyJWT, userController.getAllUsers);
router.get('/username/:username', authMiddlewares.verifyJWT, userController.getUserByUserName);
router.get('/id/:id', authMiddlewares.verifyJWT, userController.getUserByUserId);
router.get('/findUsersActive', authMiddlewares.verifyJWT, userController.getUsersActive);
router.get('/findUsersInactive', authMiddlewares.verifyJWT, userController.getUsersInactive);

//userPost
router.post('/', authMiddlewares.verifyJWT, userController.createUser);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

//userUpdates
router.put('/setUserActiveAttribute/:id', authMiddlewares.verifyJWT, userController.setUserActiveAttribute);
router.put('/:id', authMiddlewares.verifyJWT, userController.updateUser);

//userDeletes
router.delete('/:username', authMiddlewares.verifyJWT, userController.deleteUserByUserName);
router.delete('/id/:id', authMiddlewares.verifyJWT, userController.deleteUserByUserId);

module.exports = router;