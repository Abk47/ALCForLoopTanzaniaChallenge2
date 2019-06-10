const express = require('express');

const router = express.Router();

const RidesController = require('../controllers/RidesController');

router.get('/rides', RidesController.getAllRides);

router.get('/rides/:rideId', RidesController.getRide);

module.exports = router;