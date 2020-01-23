var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')
var dataFormGameRouter = require('./routes/dataFormGame');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({credentials: true, origin:'http://localhost:3000'}));

app.use('/dataFormGame', dataFormGameRouter);


app.listen(80);


module.exports = app;