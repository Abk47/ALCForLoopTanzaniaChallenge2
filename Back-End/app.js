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


// importing routes
const userRoutes = require('./routes/user');
const rideRoutes = require('./routes/rides');

app.use('/api/v1/rides', rideRoutes);
app.use('/api/v1/users', userRoutes);

// error handling
app.use((res, req, next) => {
  const error = new Error('Not found');
  res.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});


module.exports = app;
