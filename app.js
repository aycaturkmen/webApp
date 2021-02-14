//gets the package into this file. 
const express = require('express');

//execute this express - this enables us to create routes
const app = express();

//import mongoose packeage
const mongose = require('mongoose');

//body-parser to parse request body as json
const bodyParser = require('body-parser');

//cors
const cors = require('cors');

//dotenv package for hiding userid & pass of db!
require('dotenv/config')

const apiPort = 3001;

//Middlewares
//Functions to be executed when routes are being hit!
app.use('/posts', () => { 
    //prints message on the console
    console.log('This is a middleware running');
})

//Request'lerin body'sini json olarak parse etmek için middleware
app.use(bodyParser.json());

//allow react application to communicate from another hosted domain application
app.use(cors());

//Import Routes
const usersRoute = require('./routes/users');
const projectsRoute = require('./routes/projects');

app.use('/api/users', usersRoute);
app.use('/api/projects', projectsRoute);


/*

//Connect to Database (MongoDB)      ---without donenv
mongose.connect('mongodb://u7qfhzp2xbmbpyr0bkv4:cWilioeyBhquWJM9Pm1C@bnz0agtmfcxnrgp-mongodb.services.clever-cloud.com:27017/bnz0agtmfcxnrgp',
 { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to db without env!')
});

*/

//Connect to Database (MongoDB)      ---with donenv
mongose.connect(process.env.MongoDB_CONN,
 { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to db! with env')
});



//ROUTES
//get request
app.get('/', (req,res) => {
    //respond to the user with a string
    res.send('This is first get req!   at home   ');
})

//
app.get('/posts', (req,res) => {
    res.send('This is first get req!   at posts   ');
})

//Start listening
app.listen(apiPort);
console.log("app api is started on port: ", apiPort);

