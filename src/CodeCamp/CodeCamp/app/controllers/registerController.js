var App;
(function (App) {
    var Home;
    (function (Home) {
        var RegisterController = (function () {
            function RegisterController(globalsService, $location, authService, utilities, $timeout) {
                var _this = this;
                this.globalsService = globalsService;
                this.$location = $location;
                this.authService = authService;
                this.utilities = utilities;
                this.$timeout = $timeout;
                this.model = {
                    Email: "",
                    Password: "",
                    ConfirmPassword: ""
                };
                this.emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
                this.proceedToLogin = function () {
                    _this.$timeout(function () {
                        _this.$location.path("/login");
                    }, 100);
                };
            }
            RegisterController.prototype.register = function () {
                var _this = this;
                if (this.model.ConfirmPassword !== this.model.Password) {
                    alert("Passwords need to match");
                }
                else {
                    this.authService.register(this.model).success(function (data) {
                        var buttons = [];
                        buttons.push({ label: "OK", method: _this.proceedToLogin });
                        _this.utilities.showMessage("Registration succesful.  Please login now.", buttons);
                    }).error(function (data) {
                        if (data.ModelState) {
                            var messsage = "";
                            var prop;
                            for (prop in data.ModelState) {
                                if (data.ModelState.hasOwnProperty(prop)) {
                                    messsage = messsage + data.ModelState[prop][0];
                                }
                            }
                            _this.utilities.showMessage(messsage);
                        }
                    });
                }
            };
            return RegisterController;
        })();
        Home.RegisterController = RegisterController;
        angular.module("register", ["app.globalsModule", "auth", "app.utilities"]).controller("registerController", ["globalsService", "$location", "authService", "utilities", "$timeout", RegisterController]);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=registerController.js.map