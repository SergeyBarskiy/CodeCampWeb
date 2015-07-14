module App.Config {
    export interface IGLobals {
        baseUrl: string;
        version: string;
        webApiBaseUrl: string;
        applicationName: string;
        isDebug: boolean;
        loggedInUser: string;
    }

    export interface IGlobalsProvider {
        $get: () => IGLobals;
    }

    export interface ILoginResult {
        access_token: string;
        token_type: string;
        expires_in: number;
        userName: string;
        ".issued": Date;
        ".expires": Date;
    }
}
