const express = require('express');
const app = express();
const PORT = 8080;

// init morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// init body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// init cors
const cors = require('cors');
app.use(cors());

//connecting to the db?
const client = require('./db/client');
client.connect();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Router: /api
app.use('/api', require('./api')); //any url will pull from index.js -from the api folder

// console.log('working yet?')
// //Router: get users api?
// app.use('/users', require('./api/usersapi'));
// console.log('does it work?')


// //Router: get info api?
// app.use('/info', require('./api/infoapi'));


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});