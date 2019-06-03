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
    console.log('connected to database');
})
.catch((err) => {
    console.log(err);
})
.finally(() => client.end());
