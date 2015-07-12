module App.Home {

    export class CfpController {
        constructor(globalsService: App.Config.IGLobals) {
            console.log(globalsService.baseUrl + "cfp");
        }
    }

    angular.module("cfp", ["app.globalsModule"])
        .controller("cfpController", ["globalsService", CfpController]);
} 