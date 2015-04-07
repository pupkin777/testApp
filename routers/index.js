/**
 * Created by Roman on 13.03.2015.
 */
var path = require('path');

module.exports = function(app){
    var db = app.get('db');

    var userRouter = require('./users')(db);

    app.get('/',function(req, res, next){
        res.sendfile('index.html');
    });

    app.use('/user', userRouter);


};