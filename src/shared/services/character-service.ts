import Axios from 'axios';

import { Config } from '@shared/config';

class CharacterService {

	async getCharacters(url = '') {
		let response = await Axios.get(url || (`${Config.apiUrl}/character`));
		return response;
	}

	async getCharacterDetail(id){
		let response = await Axios.get(`${Config.apiUrl}/character/${id}`);
		return response;
	}
}

export default new CharacterService();
