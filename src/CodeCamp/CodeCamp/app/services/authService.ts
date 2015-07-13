module App.Auth {
    export class AuthService {
        constructor(
            private $http: ng.IHttpService,
            private globalsService: App.Config.IGLobals) {
        }

        register(model: App.Models.IRegisterBindingModel) : ng.IHttpPromise<any>{
            return this.$http.post(this.globalsService.webApiBaseUrl + "account/register", model);
        }
        login(model: App.Models.ILoginBindingModel): ng.IHttpPromise<any> {
            return this.$http({
                method: 'POST',
                url: this.globalsService.baseUrl + "Token",
                data: "userName=" + model.Email + "&password=" + model.Password +
                "&grant_type=password",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
        }
    }



    angular.module("auth", [])
        .service("authService", ["$http", "globalsService", AuthService]);
} 