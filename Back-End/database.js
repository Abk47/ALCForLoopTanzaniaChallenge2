const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'ride-my-way',
});

client.connect()
  .then(() => {
    console.log('connected to the database');
    client.end();
  })
  .catch((err) => {
    console.log(err);
    client.end();
  });


const createUsersTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        fname VARCHAR(128) NOT NULL,
        lname VARCHAR(128) NOT NULL,
        active numeric DEFAULT 0,
        created_date TIMESTAMP NOT NULL DEFAULT NOW(),
        modified_date TIMESTAMP NOT NULL DEFAULT NOW()
      )`;

  client
    .query(queryText)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });


};

const createRidesTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
        rides(
          id SERIAL PRIMARY KEY,
          name VARCHAR(128) NOT NULL,
          age VARCHAR(128) NOT NULL,
          destination VARCHAR(128) NOT NULL,
          status VARCHAR(128) NOT NULL DEFAULT 0,
          created_date TIMESTAMP NOT NULL DEFAULT NOW(),
          modified_date TIMESTAMP NOT NULL DEFAULT NOW()
        )`;

  client
    .query(queryText)
    .then((res) => {
      console.log(res);
      client.end();
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

createAllTables();

module.exports = {
  createAllTables,
};
