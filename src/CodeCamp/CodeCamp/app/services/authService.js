var App;
(function (App) {
    var Auth;
    (function (Auth) {
        var AuthService = (function () {
            function AuthService($http, globalsService) {
                this.$http = $http;
                this.globalsService = globalsService;
            }
            AuthService.prototype.register = function (model) {
                return this.$http.post(this.globalsService.webApiBaseUrl + "account/register", model);
            };
            AuthService.prototype.login = function (model) {
                return this.$http({
                    method: 'POST',
                    url: this.globalsService.baseUrl + "Token",
                    data: "userName=" + model.Email + "&password=" + model.Password + "&grant_type=password",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            };
            return AuthService;
        })();
        Auth.AuthService = AuthService;
        angular.module("auth", []).service("authService", ["$http", "globalsService", AuthService]);
    })(Auth = App.Auth || (App.Auth = {}));
})(App || (App = {}));
//# sourceMappingURL=authService.js.map