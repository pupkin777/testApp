/**
 * Created by Roman on 14.04.2015.
 */
define(['models/user'], function (userModel) {

    var UserCollection = Backbone.Collection.extend({
        model: userModel,

        url: function () {
           return '/user?' + this.count;
        },
        initialize: function (query) {
            this.count = query ? query : 'count=50';
            this.fetch({
                reset: true,
                success: function (models) {
                    console.log(models)
                },
                error: function (xhr, text) {
                    console.dir(xhr);
                    console.log(text);
                }
            })
        }
    });

    return UserCollection;
});