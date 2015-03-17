/**
 * Created by Roman on 13.03.2015.
 */

module.exports = function(app){
    console.log('-- index.js loaded success ---');

    function myCustomStack(req, res, next){
        console.log(req.ip);
        var pos = (req.ip).lastIndexOf(':');
        var s = (req.ip).substr(pos+1);
        console.log(s);
        var acceptedIps = ['192.168.88.43'];
        for(var i = 0; i < acceptedIps.length; i++) {
            if (s === acceptedIps[i]) {
                next();
            } else {
                next('Access denied');
            }
        }
    };

    function errorHandler(err, req, res, next){
       console.error(err);
        res.status(500).send(err);
    };


    app.get('/',function(req,res, next){
        res.status(200).send({success: 'root folder'});
    });

    app.post('/test', myCustomStack, function(req,res, next){
        res.status(201).send({success: 'test folder'});
    });

    app.get('/test', /*myCustomStack,*/ function(req,res, next){
        res.status(200).send({success: 'root folder'});
    });

    app.use(errorHandler);
};