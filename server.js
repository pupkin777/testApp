/**
 * Created by Roman on 13.03.2015.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var i18n = require('i18n');
var app = express();
var loger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/testApp');
db.on('error', function(){
    console.log("Connection to mainDB is failure");
});
db.once('open', function () {
    console.log("Connection to mainDB is success");

    require('./config/dev.js');


    app.use(cookieParser());
    app.use(loger('dev'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json({strict: false, limit: 1024 * 1024 * 200}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.set('db', db);

    require('./routers/index.js')(app);

    app.listen(3030, function(){
        console.log('--- Express start success ----');
    });
});