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
            Backbone.history.navigate('user', {trigger: true});
        },

        user: function(){
            this.predefault();

            require(['views/user'], function(UserView){
                var hash = window.location.hash;
                var pos = hash.indexOf('?');
                var query = hash.slice(pos + 1);
                var user = new UserView({query: query});
                //user.render();
            });
        },

        predefault: function(){
            Backbone.history.fragment = '';
        }
    });

    return appRouter;
});