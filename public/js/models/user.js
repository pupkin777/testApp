/**
 * Created by Roman on 07.04.2015.
 */
define([], function () {
    var UserModel = Backbone.Model.extend({
        idAttribute: '_id',
        url: function () {
            if (this.username) {
                return '/user/' + this.username;
            }
            return '/user/';
        },
        initialize: function (options) {
            if (options && options.userName) {
                this.username = options.userName.last
            } else if (options && options._id){
                this.username = options._id
            }
        }
    });

    return UserModel;
});