import React, { memo, useEffect, useMemo, useState } from 'react';
import {View, Text, Pressable, ActivityIndicator, FlatList} from 'react-native';

//Realm
import { getCharacters} from '@databases/allSchemas'

//Models
import { EpisodeModel } from '@shared/models/episode-model';
import CharacterInEpisode from './components/Character';
import { styles } from './style';
import helperService from '@shared/services/helper-service';

interface EpisodeListItemProps{
	item: EpisodeModel,
	navigation
}

const EpisodeListItem = ({item, navigation}: EpisodeListItemProps) => {

	const [characters, setCharacters] = useState(null);

	useEffect(()=>{
		const allIds = item.characters.map(x=>{
			return helperService.getIDfromUrl(x);
		});

		getCharacters(allIds).then((res)=>{
			setCharacters(res);
		}).catch((err)=>{
			console.log(err);
		})
		
	},[]);

	return(
		<View style={styles.container}>
			<Pressable onPress={()=>{navigation.navigate('EpisodeDetail', {id: item.id, title: item.name})}} style={styles.header}>
				<Text style={styles.title}>
					{item.name}
				</Text>
				<View style={styles.infoContainer}>
					<Text style={styles.episode}>
						{item.episode}
					</Text>
					<Text style={styles.date}>
						({item.air_date})
					</Text>
				</View>
				<Text style={styles.moreDetail}>
					More Details
				</Text>
			</Pressable>
			<FlatList				
				data={characters}
				keyExtractor={i => i.id}
				contentContainerStyle={{paddingLeft:8}}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={(i)=>{
					return <CharacterInEpisode navigation={navigation} {...i}/>
				}}
				/>
		</View>
	)

}


export default memo(EpisodeListItem, (prevProps, nextProps) => {
	return prevProps.id == nextProps.id
} );