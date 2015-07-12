var App;
(function (App) {
    var Home;
    (function (Home) {
        var LoginController = (function () {
            function LoginController(globalsService, $location) {
                this.$location = $location;
                this.model = {
                    Email: "",
                    Password: ""
                };
                this.emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
                console.log(globalsService.baseUrl + "shell");
            }
            LoginController.prototype.login = function () {
                alert("login");
            };
            LoginController.prototype.register = function () {
                this.$location.path("/register");
            };
            return LoginController;
        })();
        Home.LoginController = LoginController;
        angular.module("login", ["app.globalsModule"]).controller("loginController", ["globalsService", "$location", LoginController]);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=loginController.js.map