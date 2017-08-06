const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', require('./server/controller/userController'));


console.log('listening');
app.listen(3000);