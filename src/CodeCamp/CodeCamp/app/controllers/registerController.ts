module App.Home {


    export class RegisterController {
        model: App.Models.IRegisterBindingModel = {
            Email: "",
            Password: "",
            ConfirmPassword: ""
        }
        emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
        constructor(
            globalsService: App.Config.IGLobals,
            private $location: ng.ILocationService) {
            console.log(globalsService.baseUrl + "shell");
        }

        register() {
            if (this.model.ConfirmPassword !== this.model.Password) {
                alert("Passwords need to match");
            }
            else {
            }
        }
    }

    angular.module("register", ["app.globalsModule"])
        .controller("registerController", ["globalsService", "$location", RegisterController]);
}  