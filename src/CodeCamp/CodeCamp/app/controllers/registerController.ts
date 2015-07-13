module App.Home {


    export class RegisterController {
        model: App.Models.IRegisterBindingModel = {
            Email: "",
            Password: "",
            ConfirmPassword: ""
        }
        emailPattern = /^[\w -\.] +@([\w -]+\.)+[\w -]{2, 4 } $/;
        constructor(
            private globalsService: App.Config.IGLobals,
            private $location: ng.ILocationService,
            private authService: App.Auth.AuthService,
            private utilities: App.Utilities.IUtilities,
            private $timeout: ng.ITimeoutService) {
        }

        proceedToLogin: () => void = () => {
            this.$timeout(() => { this.$location.path("/login"); }, 100);

        }

        register() {
            if (this.model.ConfirmPassword !== this.model.Password) {
                alert("Passwords need to match");
            }
            else {
                this.authService.register(this.model)
                    .success((data) => {
                    var buttons: App.Utilities.IButtonForMessage[] = [];
                    buttons.push({ label: "OK", method: this.proceedToLogin });
                    this.utilities.showMessage("Registration succesful.  Please login now.", buttons);
                })
                    .error((data) => {
                    if (data.ModelState) {
                        var messsage = "";
                        var prop: any;
                        for (prop in data.ModelState) {
                            if (data.ModelState.hasOwnProperty(prop)) {
                                messsage = messsage + data.ModelState[prop][0];
                            }
                        }
                        this.utilities.showMessage(messsage);
                    }
                });
            }
        }
    }

    angular.module("register", ["app.globalsModule", "auth", "app.utilities"])
        .controller("registerController", ["globalsService", "$location", "authService", "utilities", "$timeout", RegisterController]);
}  