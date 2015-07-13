module App.Auth {
    export class AuthService {
        constructor(
            private $http: ng.IHttpService,
            private globalsService: App.Config.IGLobals) {
        }

        register(model: App.Models.IRegisterBindingModel) : ng.IHttpPromise<any>{
            return this.$http.post(this.globalsService.webApiBaseUrl + "account/register", model);
        }
    }



    angular.module("auth", [])
        .service("authService", ["$http", "globalsService", AuthService]);
} 