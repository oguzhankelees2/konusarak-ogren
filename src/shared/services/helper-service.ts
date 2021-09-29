import Axios from 'axios';

import { Config } from '@shared/config';

class HelperService {

	getIDfromUrl(x:string):number {
		const id = x.substring(x.lastIndexOf('/') + 1);
		return parseInt(id);
	}

}

export default new HelperService();
