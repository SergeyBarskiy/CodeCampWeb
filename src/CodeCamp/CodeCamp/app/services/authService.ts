module App.Auth {
    export class AuthService {
        constructor(
            private $http: ng.IHttpService,
            private globalsService: App.Config.IGLobals) {
        }

        
    }

    angular.module("auth", [])
        .service("authService", ["$http", "globalsService",AuthService]);
} 