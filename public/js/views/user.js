/**
 * Created by Roman on 03.04.2015.
 */
define([
    'text!templates/user.html',
    'models/user',
    'collections/users'
], function (UserTmpl, UserModel, UserCollections) {
    var user = Backbone.View.extend({
        el: '#wraper',
        tagName: 'ul',
        className: 'testClass',

        events: {
            "click li": "onClickLi"
        },

        initialize: function (options) {
            var self = this;

            /*var user = new UserModel({
                userName: {
                    first: 'Ivan',
                    last: 'Pupkin'
                }
            });
            user.fetch({
                success: function (model) {
                    self.render(model.toJSON())
                },
                error: function (xhr, text) {
                    console.dir(xhr);
                    console.log(text);
                }
            })*/

            this.collection = new UserCollections(options.query);

            this.collection.bind('reset', this.render, this);
        },

        onClickLi: function (event) {
            var target = $(event.target);
            var _id = target.data('uid');
            var user = new UserModel({
                _id: _id
            });

            user.destroy({
                success: function(){
                    target.remove();
                },
                error: function(){
                    alert('Error');
                }
            });
        },

        render: function (model) {
            var users = this.collection;
            users = users.toJSON();

            this.$el.append(_.template(UserTmpl, {users: users}));
        }
    });

    return user;
});