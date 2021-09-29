
export class EpisodeModel {

	id: string;
	name: string;
	air_date: string;
	episode: string;
	characters: Array<string>;
	url: string;
	created: string;
	

	constructor(details: any) {
		Object.assign(this, details);

		this.id = details.id;
		this.name = details.name;
		this.air_date = details.air_date;
		this.episode = details.episode;
		this.characters = details.characters;
		this.url = details.url;
		this.created = details.created;
	}
}
