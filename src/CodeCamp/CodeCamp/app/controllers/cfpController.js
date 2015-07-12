var App;
(function (App) {
    var Home;
    (function (Home) {
        var CfpController = (function () {
            function CfpController(globalsService) {
                console.log(globalsService.baseUrl + "cfp");
            }
            return CfpController;
        })();
        Home.CfpController = CfpController;
        angular.module("cfp", ["app.globalsModule"]).controller("cfpController", ["globalsService", CfpController]);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=cfpController.js.map