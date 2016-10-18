/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 * 
 * Proudly built by the Bluemix Tiger Team
 * 
 * For question or feedback, contact:
 * Oliver Siebenmarck (siebenmarck@de.ibm.com)
 */

// Modules required by the boilerplate
var express = require('express'),
    api = require('./routes/api'),
    http = require('http'),
    path = require('path'),
    fs = require('fs');

//Bluemix SDK to be added below

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser());



// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.multipart());
app.use(express.methodOverride());
app.use(app.router);



// Static routes
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// ======== Start routes


// Gets a specific fibonacci number easy API call
app.get('/fib/:number', api.getFib);

// This starts the application
http.createServer(app).listen(app.get('port'), function () {
    if ('development' == process.env.env)
        console.log("Running in developement mode");
    console.log('Express server listening on port ' + app.get('port'));
});
