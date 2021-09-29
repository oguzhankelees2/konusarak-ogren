import { environment } from '@environments/environment';

const defaultAppUrl = environment.appUrl;

export class Config {
	static readonly apiPrefix = environment.apiPrefix;
	static readonly defaultAppUrl = defaultAppUrl;
	static appUrl: string = defaultAppUrl;
	static apiUrl = defaultAppUrl + environment.apiPrefix;
	
}