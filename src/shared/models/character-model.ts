
export class CharacterModel {

	id: string;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: object;
	location: object;
	image: string;
	episode: Array<string>;
	url: string;
	created: string;
	

	constructor(details: any) {
		Object.assign(this, details);

		this.id = details.id;
		this.name = details.name;
		this.status = details.status;
		this.species = details.species;
		this.type = details.type;
		this.gender = details.gender;
		this.origin = details.origin;
		this.location = details.location;
		this.image = details.image;
		this.episode = details.episode;
		this.url = details.url;
		this.created = details.created;
	}
}
