module App.Directives {
    export class NoClickDirective implements ng.IDirective {

        constructor() {
            var self = <ng.IDirective>this;
            self.restrict = "A";
            self.link = function (scope: ng.IScope, element: ng.IAugmentedJQuery) {
                element.click(function (eventObject: JQueryEventObject) {
                    eventObject.preventDefault();
                });
            };
        }
    }

    angular.module("app.directives.Common", [])
        .directive("noClick", [function () {
        return new NoClickDirective();
    }])
}