var App;
(function (App) {
    var Home;
    (function (Home) {
        var RegisterController = (function () {
            function RegisterController(globalsService, $location) {
                this.$location = $location;
                this.model = {
                    Email: "",
                    Password: "",
                    ConfirmPassword: ""
                };
                this.emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
                console.log(globalsService.baseUrl + "shell");
            }
            RegisterController.prototype.register = function () {
                if (this.model.ConfirmPassword !== this.model.Password) {
                    alert("Passwords need to match");
                }
                else {
                }
            };
            return RegisterController;
        })();
        Home.RegisterController = RegisterController;
        angular.module("register", ["app.globalsModule"]).controller("registerController", ["globalsService", "$location", RegisterController]);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=registerController.js.map