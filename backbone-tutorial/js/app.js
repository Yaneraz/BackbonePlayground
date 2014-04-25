(function() {
    window.myApp = {
        Models: {},
        Collections: {},
        Views: {},
        page: $('#page'),
        init: function () {
            var router = new myApp.Router();
            
            router.on("route:userList", function () {
                alert(123434)
            });

            Backbone.history.start({ pushState: true });
        }
    }
})();