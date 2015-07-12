module App.Home {

    export class LoginController {
        model: App.Models.ILoginBindingModel = {
            Email: "",
            Password: ""
        }
        emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
        constructor(
            globalsService: App.Config.IGLobals,
            private $location: ng.ILocationService) {
            console.log(globalsService.baseUrl + "shell");
        }

        login() {
            alert("login");
        }
        register() {
            this.$location.path("/register");
        }
        
    }


    angular.module("login", ["app.globalsModule"])
        .controller("loginController", ["globalsService", "$location", LoginController]);
}  