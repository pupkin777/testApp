/**
 * Created by Roman on 13.03.2015.
 */
var express = require('express');
var app = express();
var loger = require('morgan');

function myCustomStack(req, res, next){
    console.log(req.ip);
    var pos = (req.ip).lastIndexOf(':');
    var s = (req.ip).substr(pos+1+10000);
    console.log('test');
    console.log(s);
    var acceptedIps = ['192.168.88.43'];
    for(var i = 0; i < acceptedIps.length; i++) {
        if (s === acceptedIps[i]) {
            next();
        } else {
            next('Access denied');
        }
    }
}

//app.use(myCustomStack);
app.use(loger('dev'));



require('./routers/index.js')(app);

app.listen(3030, function(){
    console.log('--- Express start success ----');
});