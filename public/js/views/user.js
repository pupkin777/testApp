/**
 * Created by Roman on 03.04.2015.
 */
define([
    'text!templates/user.html',
    'models/user'
], function(UserTmpl, UserModel){
    var user = Backbone.View.extend({
        el: '#wraper',
        tagName: 'ul',
        className: 'testClass',
        initialize: function(){
            var self = this;

            var user = new UserModel({
                userName: {
                    first: 'Ivan',
                    last: 'Pupkin'
                }
            });
            user.fetch({
                success: function(model){
                    self.render(model.toJSON())
                },
                error: function(xhr, text){
                    console.dir(xhr);
                    console.log(text);
                }
            })
        },
        render: function(model){
            this.$el.append(_.template(UserTmpl, model));
        }
    });

    return user;
});