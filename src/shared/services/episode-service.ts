import Axios from 'axios';

import { Config } from '@shared/config';

class EpisodeService {

	async getEpisodes(url = '') {
		let response = await Axios.get(url || (`${Config.apiUrl}/episode`));
		return response;
	}

	async getEpisodesFromIds(ids){
		let response = await Axios.get(`${Config.apiUrl}/episode/${ids}`);
		return response;
	}

}

export default new EpisodeService();
