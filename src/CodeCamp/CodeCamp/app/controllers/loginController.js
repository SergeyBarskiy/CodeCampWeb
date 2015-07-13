var App;
(function (App) {
    var Home;
    (function (Home) {
        var LoginController = (function () {
            function LoginController(globalsService, $location, authService, utilities) {
                this.globalsService = globalsService;
                this.$location = $location;
                this.authService = authService;
                this.utilities = utilities;
                this.model = {
                    Email: "",
                    Password: "",
                    grant_type: "password"
                };
                this.emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.authService.login(this.model).success(function (data) {
                    _this.utilities.hidePleaseWait();
                    _this.$location.path("/");
                });
            };
            LoginController.prototype.register = function () {
                this.$location.path("/register");
            };
            return LoginController;
        })();
        Home.LoginController = LoginController;
        angular.module("login", ["app.globalsModule", "app.utilities"]).controller("loginController", ["globalsService", "$location", "authService", "utilities", LoginController]);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=loginController.js.map