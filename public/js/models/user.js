/**
 * Created by Roman on 07.04.2015.
 */
define([], function(){
    var UserModel = Backbone.Model.extend({
        idAttribute: '_id',
        url: function(){
            return '/user/' + this.username;
        },
        initialize: function(options){
            this.username = options.userName.last
        }
    });

    return UserModel;
});