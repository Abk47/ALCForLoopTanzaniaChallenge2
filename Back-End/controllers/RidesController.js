// Importing Database connection
const pool = require('../db');

exports.createRide = (req, res) => {
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
};

exports.getAllRides = (req, res) => {
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
  });
};

exports.getRide = (req, res) => {
  const id = req.params.rideId;
  const queryString = 'SELECT * FROM rides WHERE ride_id = $1';
  pool.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    } else if (results.rows.length > 0) {
      res.status(200).json({
        detail: results.rows,
        request: {
          type: 'GET',
          url: `${req.protocol}://${req.get('host')}/rides/`,
        },
      });
    } else if (results.rows.length === 0) {
      res.status(404).json({ message: 'No entry found!' });
    }
  });
};
