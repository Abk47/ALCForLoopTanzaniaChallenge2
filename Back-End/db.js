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
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log(err);
    pool.end();
  });

// Queries for table creation
const createUsersTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      users(
        user_id SERIAL PRIMARY KEY,
        fullName VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        active numeric DEFAULT 0,
        created_date TIMESTAMP NOT NULL DEFAULT NOW(),
        modified_date TIMESTAMP NOT NULL DEFAULT NOW()
      )`;

  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });


};

const createRidesTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
        rides(
          ride_id SERIAL PRIMARY KEY,
          name VARCHAR(128) NOT NULL,
          age VARCHAR(128) NOT NULL,
          destination VARCHAR(128) NOT NULL,
          status VARCHAR(128) NOT NULL DEFAULT 0,
          created_date TIMESTAMP NOT NULL DEFAULT NOW(),
          modified_date TIMESTAMP NOT NULL DEFAULT NOW()
        )`;

  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
};

// Create all Tables
const createAllTables = () => {
  createUsersTable();
  createRidesTable();
};

module.exports = pool;
