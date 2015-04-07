/**
 * Created by Roman on 03.04.2015.
 */

define([], function(){
    var appRouter = Backbone.Router.extend({
        routes: {
            "user": "user",
            "company": "pasulyov"
        },

        pasulyov: function(){
            Backbone.history.navigate('user');
        },

        user: function(){
            this.predefault();

            require(['views/user'], function(UserView){
                var user = new UserView();
                //user.render();
            });
        },

        predefault: function(){
            Backbone.history.fragment = '';
        }
    });

    return appRouter;
});