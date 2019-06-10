const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');
const RidesController = require('../controllers/RidesController');

router.post('/auth/register', UsersController.registerUser);

router.post('/auth/login', UsersController.loginUser);

router.post('/user/rides', RidesController.createRide);

module.exports = router;