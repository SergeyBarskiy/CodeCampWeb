var App;
(function (App) {
    var Directives;
    (function (Directives) {
        var NoClickDirective = (function () {
            function NoClickDirective() {
                var self = this;
                self.restrict = "A";
                self.link = function (scope, element) {
                    element.click(function (eventObject) {
                        eventObject.preventDefault();
                    });
                };
            }
            return NoClickDirective;
        })();
        Directives.NoClickDirective = NoClickDirective;
        angular.module("app.directives.Common", []).directive("noClick", [function () {
            return new NoClickDirective();
        }]);
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
//# sourceMappingURL=commonDirectives.js.map