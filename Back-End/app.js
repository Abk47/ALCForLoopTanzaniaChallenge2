const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* CORS */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
    return res.status(200).json({});
  }
  next();
});

// Importing Controllers
const RidesController = require('./controllers/RidesController');
const UsersController = require('./controllers/UsersController');

// This endpoint is to populate database with rides information, I AM STILL ADDING NEW FEATURES
app.post('/rides', RidesController.createRide);

app.get('/rides', RidesController.getAllRides);

app.get('/rides/:rideId', RidesController.getRide);

app.post('/auth/register', UsersController.registerUser);

app.post('/auth/login', UsersController.loginUser);

module.exports = app;
