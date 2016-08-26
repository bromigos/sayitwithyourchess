var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 1732;

app.listen(port);

console.log('Its alive on port: ', port);