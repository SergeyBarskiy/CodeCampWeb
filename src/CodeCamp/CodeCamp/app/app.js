/// <reference path="globals.ts" />
var App;
(function (App) {
    var AppUtils = (function () {
        function AppUtils() {
        }
        AppUtils.createViewUrl = function (fragment, globals) {
            return globals.baseUrl + fragment + "?v=" + globals.version;
        };
        return AppUtils;
    })();
    App.AppUtils = AppUtils;
    angular.module("app", [
        "app.globalsModule",
        "ngRoute",
        "shell",
        "home",
        "cfp",
        "app.directives.Common"
    ]).config(["$routeProvider", "globalsServiceProvider", function ($routeProvider, globalsProvider) {
        var globals = globalsProvider.$get();
        $routeProvider.when("/login", {
            controller: "loginController",
            controllerAs: "vm",
            templateUrl: AppUtils.createViewUrl("login/logon", globals)
        });
        $routeProvider.when("/forgotpassword", {
            controller: "forgotPasswordController",
            controllerAs: "vm",
            templateUrl: AppUtils.createViewUrl("Login/ForgotPassword", globals)
        });
        $routeProvider.when("/cfp", {
            controller: "cfpController",
            controllerAs: "vm",
            templateUrl: AppUtils.createViewUrl("Cfp/Cfp", globals)
        });
        $routeProvider.when("/", {
            controller: "homeController",
            controllerAs: "vm",
            templateUrl: AppUtils.createViewUrl("Home/Home", globals)
        });
        $routeProvider.otherwise({
            redirectTo: "/"
        });
    }]);
})(App || (App = {}));
//# sourceMappingURL=app.js.map