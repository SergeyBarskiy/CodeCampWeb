module App.Home {

    export class HomeController {
        constructor(globalsService: App.Config.IGLobals) {
            console.log(globalsService.baseUrl + "home");
        }
    }

    angular.module("home", ["app.globalsModule"])
        .controller("homeController", ["globalsService", HomeController]);
} 