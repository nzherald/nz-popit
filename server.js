var express   = require('express'),
    popitApi  = require('popit-api'),
    dotenv    = require('dotenv');

dotenv.load();

var app  = express(),
    port = process.env.PORT;

// Configure the PopIt API app
var apiApp = popitApi({
  databaseName: process.env.DATABASE
});

// Mount the PopIt API app at the appropriate path
app.use('/', apiApp);

// Start to listen
app.listen(port);
console.log('API Server listening at http://127.0.0.1:' + port + '/');
