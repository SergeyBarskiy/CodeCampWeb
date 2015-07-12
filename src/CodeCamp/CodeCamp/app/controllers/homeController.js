var App;
(function (App) {
    var Home;
    (function (Home) {
        var HomeController = (function () {
            function HomeController(globalsService) {
                console.log(globalsService.baseUrl + "home");
            }
            return HomeController;
        })();
        Home.HomeController = HomeController;
        angular.module("home", ["app.globalsModule"]).controller("homeController", ["globalsService", HomeController]);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=homeController.js.map