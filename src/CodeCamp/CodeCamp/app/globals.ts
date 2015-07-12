module App.Config {
    export interface IGLobals {
        baseUrl: string;
        version: string;
        webApiBaseUrl: string;
        applicationName: string;
        isDebug: boolean;
    }

    export interface IGlobalsProvider {
        $get: () => IGLobals;
    }
}