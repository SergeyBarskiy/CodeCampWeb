var App;
(function (App) {
    var Home;
    (function (Home) {
        var ShellController = (function () {
            function ShellController(globalsService, $location) {
                this.$location = $location;
                console.log(globalsService.baseUrl + "shell");
            }
            ShellController.prototype.home = function () {
                this.$location.path("/home");
            };
            ShellController.prototype.cfp = function () {
                this.$location.path("/cfp");
            };
            return ShellController;
        })();
        Home.ShellController = ShellController;
        angular.module("shell", ["app.globalsModule"]).controller("shellController", ["globalsService", "$location", ShellController]);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=shellController.js.map