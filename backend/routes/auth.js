const express = require('express');
const router = express.Router();
const {createUser, logUser,getUser} = require('../controllers/user-login_controller');
const authenticateToken = require('../controllers/authmiddleware');





router.route('/register-user').post(createUser)
router.route('/login-user').post(logUser)
router.route('/user-profile').get(authenticateToken,getUser)


module.exports = router;