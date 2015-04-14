/**
 * Created by Roman on 03.04.2015.
 */
define(['router'], function(Router){
    var init = function(){
        var appRouter = new Router();
        var App = document.App;
        App = App || {};

        App.currentUrl = Backbone.history.fragment || 'user';
        console.log(Backbone.history.fragment);
        if(!Backbone.history.fragment) {
            Backbone.history.start();
        } else {
            Backbone.history.navigate('user', {trigger: true});
        }

    };

    return {
        initialize: init
    }
});