var App;
(function (App) {
    var Auth;
    (function (Auth) {
        var AuthService = (function () {
            function AuthService($http, globalsService, utilities) {
                this.$http = $http;
                this.globalsService = globalsService;
                this.utilities = utilities;
            }
            AuthService.prototype.register = function (model) {
                var config = { showPleaseWait: true };
                return this.$http.post(this.globalsService.webApiBaseUrl + "account/register", model, config);
            };
            AuthService.prototype.login = function (model) {
                var _this = this;
                this.utilities.showPleaseWait();
                var promise = this.$http({
                    method: 'POST',
                    url: this.globalsService.baseUrl + "Token",
                    data: "userName=" + model.Email + "&password=" + model.Password + "&grant_type=password",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                });
                promise.error(function (data) {
                    _this.utilities.hidePleaseWait();
                    _this.utilities.showMessage("Error logging in.  Verify email and password.");
                });
                return promise;
            };
            return AuthService;
        })();
        Auth.AuthService = AuthService;
        angular.module("auth", ["app.utilities"]).service("authService", ["$http", "globalsService", "utilities", AuthService]);
    })(Auth = App.Auth || (App.Auth = {}));
})(App || (App = {}));
//# sourceMappingURL=authService.js.map