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

const rides = [{
    id: 1,
    name: "Abuka",
    age: 25,
    Available: true
},
{
    id: 2,
    name: "Allen",
    age: 28,
    Available: true
},
{
    id: 3,
    name: "Eve",
    age: 30,
    Available: true
},
{
    id: 4,
    name: "Joshua",
    age: 25,
    Available: true
}

];

//Fetch all rides offers
app.get('/rides', (req, res, next) => {
    const response = {
        count: rides.length,
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
    if (response) {
        res.status(200).json(response);
    } else {
        res.status(500).json({
            message: "Error fetching data"
        });
    }
});

//Fetch a single ride offer
app.get('/rides/:rideId', (req, res, next) => {
    const id = req.params.rideId;
    const query = rides.find(doc => doc.id == id);
    console.log(query);

    const rider = {
        message: "Ride offer successfully fetched",
        details:  {
                name: query.name,
                age: query.age,
                availability: query.available,
                request: {
                    type: 'GET',
                    url: req.protocol + '://' + req.get('host') + '/rides' 
                }
            }
        }

if(query.length == 0){
    res.status(404).json({
        message: "No valid entry found"
    });
} else if (query.length === 1) {
    res.status(200).json(rider);
} else {
    res.status(500).json({
        message: "No valid entry found"
    });
}
    //This logic works.. just testing new ones
    // if(rider){
    //     res.status(200).json(rider);
    // } else {
    //     res.status(500).json({
    //         message: "No valid entry found"
    //     });
    // }
   
});

module.exports = app;