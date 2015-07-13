var App;
(function (App) {
    var Interceptors;
    (function (Interceptors) {
        var HttpInterceptor = (function () {
            function HttpInterceptor($q, utilities, globalsService) {
                this.$q = $q;
                this.utilities = utilities;
                this.globalsService = globalsService;
                var totalRequests = 0;
                var self = this;
                this.request = function (config) {
                    if (config.showPleaseWait) {
                        totalRequests++;
                        if (totalRequests === 1) {
                            self.utilities.showPleaseWait();
                        }
                    }
                    return config;
                };
                this.requestError = function (rejection) {
                    var config = rejection.config;
                    if (config && config.showPleaseWait) {
                        totalRequests--;
                        if (totalRequests === 0) {
                            self.utilities.hidePleaseWait();
                        }
                    }
                    self.utilities.showMessage("Error ocurred while processing request.");
                    return $q.reject(rejection);
                };
                this.response = function (response) {
                    var config = response.config;
                    if (config && config.showPleaseWait) {
                        totalRequests--;
                        if (totalRequests === 0) {
                            self.utilities.hidePleaseWait();
                        }
                    }
                    return response;
                };
                this.responseError = function (rejection) {
                    var config = rejection.config;
                    if (config && config.showPleaseWait) {
                        totalRequests--;
                        if (totalRequests === 0) {
                            self.utilities.hidePleaseWait();
                        }
                    }
                    self.utilities.showMessage("Error ocurred while processing request.");
                    return $q.reject(rejection);
                };
            }
            return HttpInterceptor;
        })();
        Interceptors.HttpInterceptor = HttpInterceptor;
    })(Interceptors = App.Interceptors || (App.Interceptors = {}));
})(App || (App = {}));
//# sourceMappingURL=httpInterceptor.js.map