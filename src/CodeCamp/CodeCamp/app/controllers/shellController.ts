module App.Home {

    export class ShellController {
        constructor(
            globalsService: App.Config.IGLobals,
            private $location: ng.ILocationService) {
            console.log(globalsService.baseUrl + "shell");
        }

        home() {
            this.$location.path("/home");
        }
        cfp() {
            this.$location.path("/cfp");
        }
        login() {
            this.$location.path("/login");
        }
        register() {
            this.$location.path("/register");
        }
    }

    angular.module("shell", ["app.globalsModule"])
        .controller("shellController", ["globalsService", "$location", ShellController]);
} 