const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

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

const rides = [{
  id: 1,
  name: 'Abuka',
  age: 25,
  Available: true,
},
{
  id: 2,
  name: 'Allen',
  age: 28,
  Available: true,
},
{
  id: 3,
  name: 'Eve',
  age: 30,
  Available: true,
},
{
  id: 4,
  name: 'Joshua',
  age: 25,
  Available: true,
},

];

// Fetch all rides offers
app.get('/api/v1/rides', (req, res, next) => {
  const response = {
    count: rides.length,
    message: 'List of all available ride offers',
    details: rides.map(ride => ({
      name: ride.name,
      age: ride.age,
      availability: ride.Available,
      request: {
        type: 'GET',
        url: `${req.protocol}://${req.get('host')}/api/v1/rides/${ride.id}`,
      },
    })),
  };
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(500).json({
      message: 'Error fetching data',
    });
  }
});

// Fetch a single ride offer
app.get('/api/v1/rides/:rideId', (req, res, next) => {
  const id = req.params.rideId;
  const query = rides.find(doc => doc.id == id);
  // Checking for entries in the array
  if (query) {
    const offer = {
      message: 'Ride offer fetched successfully',
      details: {
        name: query.name,
        age: query.age,
        availability: query.available,
        request: {
          type: 'GET',
          url: `${req.protocol}://${req.get('host')}/api/v1/rides`,
        },
      },
    };
    res.status(200).json(offer);
  } else if (!query) {
    res.status(404).json({
      message: 'No entry found!',
    });
  } else {
    res.status(500).json({
      message: 'Query error!',
    });
  }
});

// Creating a ride offer
app.post('/api/v1/rides', (req, res, next) => {
  const myOffer = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    available: req.body.available,
  };

  if (myOffer == rides) {
    res.status(500).json({
      message: 'Id exists already!',
    });
  } else {
    rides.push(myOffer);
    res.status(200).json({
      message: 'Ride offer created!',
      details: {
        name: myOffer.name,
        age: myOffer.age,
        availability: myOffer.available,
        request: {
          type: 'GET',
          url: `${req.protocol}://${req.get('host')}/api/v1/rides`,
        },
      },
    });
  }
});


// Making a request to join a ride
app.post('/api/v1/rides/:rideId/requests', (req, res, next) => {
  // I will write my code here
});

// Database connection
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'ride-my-way',
});

pool.connect()
  .then(() => {
    console.log('connected to the database');
  })
  .catch((err) => {
    console.log(err);
    pool.end();
  });

// This endpoint is to populate database with rides information
app.post('/rides', (req, res) => {
  if (!req.body.name || !req.body.age || !req.body.destination || !req.body.status) {
    return res.status(404).json({ message: 'All fields are required' });
  }
  const {
    name, age, destination, status, created_date = new Date(), modified_date = new Date(),
  } = req.body;

  pool.query('INSERT INTO rides (name, age, destination, status, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6)', [name, age, destination, status, created_date, modified_date], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    res.status(201).send('New ride created!');
    pool.end();
  });
});


// Get all rides from the database
app.get('/rides', (req, res) => {
  pool.query('SELECT * from rides', (error, results) => {
    const rideDetails = {
      count: results.rowCount,
      message: 'List of all available rides!',
      details: results.rows,
      request: {
        type: 'GET',
        url: `${req.protocol}://${req.get('host')}/rides/`,
      },
    };
    if (error) {
      throw error;
    }
    res.status(200).json(rideDetails);
    pool.end();
  });
});

// Fetch details of a single ride
app.get('/rides/:rideId', (req, res) => {
  const id = req.params.rideId;

  pool.query('SELECT * FROM rides WHERE ride_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    } else if ((results.rows).length > 0) {
      res.status(200).json({
        detail: results.rows,
        request: {
          type: 'GET',
          url: `${req.protocol}://${req.get('host')}/rides/`,
        },
      });
    } else if ((results.rows).length === 0) {
      res.status(404).json({ message: 'No entry found!' });
    }
  });

});

module.exports = app;
