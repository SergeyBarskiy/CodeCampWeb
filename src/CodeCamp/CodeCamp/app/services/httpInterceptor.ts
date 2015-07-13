module App.Interceptors {


    export interface IRequestConfig extends ng.IRequestConfig {
        showPleaseWait: boolean;
    }

    export interface IHttpInterceptor {
        request: (config: IRequestConfig) => IRequestConfig;
        requestError: (rejection: any) => ng.IPromise<any>;
        response: (response: ng.IPromise<any>) => ng.IPromise<any>;
        responseError: (rejection: any) => ng.IPromise<any>;
    }

    interface IPromiseWithConfig<T> extends ng.IPromise<T> {
        config: any;
    }

    class HttpInterceptor implements IHttpInterceptor {
        request: (config: IRequestConfig) => IRequestConfig;
        requestError: (rejection: any) => ng.IPromise<any>;
        response: (response: ng.IPromise<any>) => ng.IPromise<any>;
        responseError: (rejection: any) => ng.IPromise<any>;

        constructor(private $q: ng.IQService, private utilities: App.Utilities.IUtilities) {
            var totalRequests: number = 0;
            var self = this;
            this.request = function (config: IRequestConfig) {
                if (config.showPleaseWait) {
                    totalRequests++;
                    if (totalRequests === 1) {
                        self.utilities.showPleaseWait();
                    }
                }
                return config;
            };
            this.requestError = function (rejection: any) {
                var config: IRequestConfig = rejection.config;
                if (config && config.showPleaseWait) {
                    totalRequests--;
                    if (totalRequests === 0) {
                        self.utilities.hidePleaseWait();
                    }
                }
                self.utilities.showMessage("Error ocurred while processing request.");
                return $q.reject(rejection);
            };
            this.response = function (response: IPromiseWithConfig<any>) {
                var config: IRequestConfig = response.config;
                if (config && config.showPleaseWait) {
                    totalRequests--;
                    if (totalRequests === 0) {
                        self.utilities.hidePleaseWait();
                    }
                }
                return response;
            };
            this.responseError = function (rejection: any) {
                var config: IRequestConfig = rejection.config;
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
    }

    angular.module("App.Interceptors", ["app.core.services.utilities", "app.globalsModule"])
        .config(["$httpProvider", function ($httpProvider: ng.IHttpProvider) {
        $httpProvider.interceptors.push("httpInterceptor");
    }])
        .service("httpInterceptor", ["$q", "utilities", "globalsService", HttpInterceptor]
        );
} 