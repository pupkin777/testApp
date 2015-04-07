/**
 * Created by Roman on 27.03.2015.
 */
 var express = require('express');
var mongoose = require('mongoose');

var customRouter = function(db) {

    var UserSchema = new mongoose.Schema({
        userName: {
            first: String,
            last: {type: String, default: 'Pupkin'}
        },
        age: {type: Number, default: 18}
    }, {collection: 'users'});

    var userModel = db.model('user', UserSchema);



    var userRouter = express.Router();

    userRouter.post('/', function(req, res, next){
        var body = req.body;

        var user = new userModel();

        user.save({
            userName: body.userName,
            age: body.age
        }, function(err, _user){
            if(err){
                console.log(err);
            } else {
                console.dir(_user);
                res.status(200).send(_user);
            }
        })
    });

    userRouter.get('/:username', function(req, res, next){
        var username = req.params.username;

        userModel.findOne({
            'userName.last': username
        }, function(err, _user){
            if(err){
                console.log(err);
            } else {
                console.dir(_user);
                res.status(200).send(_user);
            }
        })
    });

    return userRouter;
};

module.exports = customRouter;