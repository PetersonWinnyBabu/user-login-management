const express = require('express');
const router = express.Router();
const {createUser, logUser,getUser} = require('../controllers/user-login_controller');
const authenticateToken = require('../controllers/authmiddleware');





router.route('/register').post(createUser)
router.route('/login').post(logUser)
router.route('/user').get(authenticateToken,getUser)


module.exports = router;
