myApp.Router = Backbone.Router.extend({
    routes: {
        'list': 'userList',
        'login': 'login',
        'signup': 'signup',
        'userDetails': 'userDetails'
    },
    initiaize: function (options) {
        alert(12343)

        this.routes('', 'index', function() {
            this.navigate('list', { silent: true});
        });
    }
});

