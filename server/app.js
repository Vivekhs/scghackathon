var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const APP_CONFIG = require('./configs/appConfig');
var indexRouter = require('./routes/index');

var app = express();

mongoose.connect(APP_CONFIG.DB_URI, { useNewUrlParser: true }, (error)=>{
    if(error){
        console.log('Error while connecting to DB', error);
        return;
    }
    console.log('Connected to DB');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
