const express = require('express');

const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UsersController = require('../controllers/UsersController');
const RidesController = require('../controllers/RidesController');

router.post('/auth/register', UsersController.registerUser);

router.post('/auth/login', UsersController.loginUser);

router.post('/rides', checkAuth, RidesController.createRide);

module.exports = router;
