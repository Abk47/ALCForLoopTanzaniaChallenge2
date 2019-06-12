const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const RidesController = require('../controllers/RidesController');

router.get('/', checkAuth, RidesController.getAllRides);

router.get('/:rideId', checkAuth, RidesController.getRide);

module.exports = router;
