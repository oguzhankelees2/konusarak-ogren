import Realm from 'realm';

export const CHARACTER_SCHEMA = 'Character';

export const CharacterSchema = {
	name: CHARACTER_SCHEMA,
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: "string",
		status: "string",
		species: "string",	
		type: "string",
		gender: "string",
		image: "string",
		url: "string",	
		created: "string"
	}
}

const databaseOptions = {
	path: 'konusarak_ogren.realm',
	schema:[CharacterSchema]
}

export const getCharacterDetail = (id) => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then((realm)=>{
		const character = realm.objects(CHARACTER_SCHEMA).filtered(`id=${id}`)[0];
		resolve(character);
	}).catch((err)=>{
		reject(err);
	})
})

export const getCharacters = (ids: Array<Number>) => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then((realm)=>{
		const characters = realm.objects(CHARACTER_SCHEMA).filter((i)=>{
			return ids.includes(i.id);
		});
		resolve(characters);
	}).catch((err)=>{
		reject(err);
	})
});

export const insertNewCharacter = (characters) => new Promise((resolve, reject)=>{
	Realm.open(databaseOptions).then((realm) => {
		realm.write(()=>{
			characters.forEach(character => {
				realm.create(CHARACTER_SCHEMA, character);
			});
			resolve(characters);
		})
	}).catch((err)=>{
		reject(err);
	})
})