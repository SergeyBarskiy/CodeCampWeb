module App.Auth {
    export class AuthService {
        constructor(
            private $http: ng.IHttpService,
            private globalsService: App.Config.IGLobals,
            private utilities: App.Utilities.IUtilities) {
        }

        register(model: App.Models.IRegisterBindingModel): ng.IHttpPromise<any> {
            var config: App.Interceptors.IRequestShortcutConfig = { showPleaseWait: true };
            return this.$http.post(this.globalsService.webApiBaseUrl + "account/register", model, config);
        }
        login(model: App.Models.ILoginBindingModel): ng.IHttpPromise<App.Config.ILoginResult> {
            this.utilities.showPleaseWait();
            var promise = this.$http({
                method: 'POST',
                url: this.globalsService.baseUrl + "Token",
                data: "userName=" + model.Email + "&password=" + model.Password +
                "&grant_type=password",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

            });
            promise.error((data) => {
                this.utilities.hidePleaseWait();
                this.utilities.showMessage("Error logging in.  Verify email and password.");
            });
            return promise;
        }
    }



    angular.module("auth", ["app.utilities"])
        .service("authService", ["$http", "globalsService", "utilities", AuthService]);
} 