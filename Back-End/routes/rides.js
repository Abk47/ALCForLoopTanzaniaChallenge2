const express = require('express');

const router = express.Router();

const RidesController = require('../controllers/RidesController');

router.get('/', RidesController.getAllRides);

router.get('/:rideId', RidesController.getRide);

module.exports = router;
