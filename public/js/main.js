/**
 * Created by Roman on 03.04.2015.
 */
require.config({
    paths: {
        jQuery: './libs/jquery',
        Underscore: './libs/underscore',
        Backbone: './libs/backbone',
        //less: './libs/less.min',
        templates: '../templates',
        views: './views',
        models: './models',
        collections: './collections',
        text: './libs/text'
    },
    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'app': ['Backbone']
    }
});

require(['app'], function (app) {
    app.initialize();
});