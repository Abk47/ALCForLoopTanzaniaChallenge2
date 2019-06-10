const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Importing Database connection
const pool = require('../db');

exports.registerUser = (req, res) => {
  if (!req.body.fullname || !req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'All fields are required' });
  }
  // Checking if user email exists
  const queryString = 'SELECT * FROM users WHERE email = $1';
  pool.query(queryString, [req.body.email])
    .then((result) => {
      if (result.rows.length > 0) {
        return res.status(400).send({ message: 'Email already exists' });
      }
      // Hashing the password before saving it in the database

      const saltRounds = 10;
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }
        const query1 = 'INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3)';
        const values = [req.body.fullname, req.body.email, hash];
        pool.query(query1, values, (err, results) => {
          if (err) {
            res.status(500).json({
              error: err,
            });
          } res.status(201).send('User successfully added');
          pool.end();
        });
      });
    });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const queryString = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
  pool.query(queryString, values, (err, results) => {
    if (err)
    {
      res.status(500).json({
        error: err,
      });
      // Checking if email exists
    } else if (results.rows.length < 1) {
      return res.status(401).json({
        message: 'Authentication failed',
      });
    } else {
      // Checking if passwords match
      const dbResult = results.rows[0]; // A stored variable resulting from the query result from the Database
      bcrypt.compare(password, dbResult.password, (error, result) => {
        if (error) {
          return res.status(401).json({
            message: 'Auth failed',
          });
        } if (result) {
          // Creating Json Web Token
          const token = jwt.sign({
            fullname: dbResult.fullname,
            email: dbResult.email,
            userId: dbResult.user_id,
          },
          'secret',
          {
            expiresIn: '1h',
          },
          );
          return res.status(200).json({
            message: 'Authentication successful',
            token,
          });
        } if (!result) {
          res.status(404).json({
            message: 'Authentication failed',
          });
        }
      });
    }
  });
};
