const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
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
  // code here
});

module.exports = app;
