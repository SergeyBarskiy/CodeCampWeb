
declare module App.Models {

	interface IRegisterBindingModel {
		Email: string;
		Password: string;
		ConfirmPassword: string;
	}

	interface ILoginBindingModel {
		Email: string;
		Password: string;
		grant_type: string;
	}

}
