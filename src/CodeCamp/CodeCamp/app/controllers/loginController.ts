module App.Home {

    export class LoginController {
        model: App.Models.ILoginBindingModel = {
            Email: "",
            Password: "",
            grant_type: "password"
        }
        emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
        constructor(
            private globalsService: App.Config.IGLobals,
            private $location: ng.ILocationService,
            private authService: App.Auth.AuthService,
            private utilities: App.Utilities.IUtilities) {
        }

        login() {
            this.authService.login(this.model)
                .success((data) => {
                this.utilities.hidePleaseWait();
                this.$location.path("/");
            });
        }
        register() {
            this.$location.path("/register");
        }

    }


    angular.module("login", ["app.globalsModule", "app.utilities"])
        .controller("loginController", ["globalsService", "$location", "authService", "utilities", LoginController]);
}  