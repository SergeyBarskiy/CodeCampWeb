/// <reference path="globals.ts" />
module App {

    export class AppUtils {
        static createViewUrl(fragment: string, globals: App.Config.IGLobals) {
            return globals.baseUrl + fragment + "?v=" + globals.version;
        }
    }

    angular.module("app", [
        "app.globalsModule",
        "ngRoute",
        "shell",
        "home",
        "cfp",
        "app.directives.Common"
    ]).config(["$routeProvider", "globalsServiceProvider",
        ($routeProvider: ng.route.IRouteProvider, globalsProvider: App.Config.IGlobalsProvider) => {
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
                templateUrl: AppUtils.createViewUrl("Home/Home",globals)
            });
            $routeProvider.otherwise({
                redirectTo: "/"
            });
        }]);
}