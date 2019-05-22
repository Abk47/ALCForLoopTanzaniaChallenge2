const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});

//fetch all rides offers
app.get('/rides', (req, res) => {
    const rides = [{ id: 1, name: "Abuka", age: 25, Available: true },
    { id: 2, name: "Allen", age: 28, Available: true },
    { id: 3, name: "Eve", age: 30, Available: true },
    { id: 4, name: "Joshua", age: 25, Available: true }
    ];

    const response = {
        message: 'List of all available ride offers',
        drivers: rides.map(ride => {
            return {
                name: ride.name,
                age: ride.age,
                availability: ride.Available,
                request: {
                    type: 'GET',
                    url: req.protocol + '://' + req.get('host') + '/rides/' + ride.id
                }
            }
        })
    }
    res.status(200).json(response);
});

module.exports = app;