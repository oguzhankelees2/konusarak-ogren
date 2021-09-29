import React, { useEffect, useState } from 'react';
import {FlatList, Text, View} from 'react-native';

//Realm
import {getCharacters} from '@databases/allSchemas';

//Services
import episodeService from '@shared/services/episode-service';
import helperService from '@services/helper-service';

//Models
import { EpisodeModel } from '@shared/models/episode-model';
import { CharacterModel } from '@shared/models/character-model';

//Styles
import {styles} from './style';
import CharacterInEpisode from '@shared/components/EpisodeListItem/components/Character';

const EpisodeDetail = ({route, navigation}) => {
	
	const {id} = route?.params;
	const [episode, setEpisode] = useState<EpisodeModel>();
	const [characters, setCharacters] = useState<CharacterModel[]>();

	useEffect(()=>{
		episodeService.getEpisodesFromIds(id).then((res)=>{
			setEpisode(res.data);
			const allIds = res.data?.characters?.map((x)=>{
				return helperService.getIDfromUrl(x);
			})
			getAllCharacter(allIds);
		}).catch((err)=>{
			console.log(err);
		})
	},[id]);

	const getAllCharacter = (id) => {
		getCharacters(id).then((res)=>{
			setCharacters(res);
		}).catch((err)=>{
			console.log(err);
		})
	}

	const renderItem = ({item}) => {
		return <CharacterInEpisode textStyle={styles.characterName} imageStyle={styles.characterImage} navigation={navigation} item={item}/>
	}

	return(
		<View style={styles.container}>
			<View style={styles.tableContainer}>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Name</Text>
					</View>
					<View style={styles.col}>
						<Text>{episode?.name || '-'}</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Episode</Text>
					</View>
					<View style={styles.col}>
						<Text>{episode?.episode || '-'}</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Air Date</Text>
					</View>
					<View style={styles.col}>
						<Text>{episode?.air_date || '-'}</Text>
					</View>
				</View>

			</View>
			<Text style={styles.title}>
				Charachers ({characters?.length || 0})
			</Text>
			<FlatList 
				contentContainerStyle={{paddingHorizontal:12, marginTop:15}}
				data={characters}
				keyExtractor={i => i.id}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)

}

export default EpisodeDetail;