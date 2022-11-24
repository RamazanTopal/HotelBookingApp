export interface IGetUserAuthInfoRequest {
	id: number | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	iat: number | undefined;
	exp: number | undefined;
}
