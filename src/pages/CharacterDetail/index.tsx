import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';

//Third party libraries
import FastImage from 'react-native-fast-image';

//Models
import { CharacterModel } from '@shared/models/character-model';
import { EpisodeModel } from '@shared/models/episode-model';

//Services
import characterService from '@shared/services/character-service';
import helperService from '@shared/services/helper-service';
import episodeService from '@shared/services/episode-service';

//Styles
import {styles} from './style';
import EpisodeInCharacterDetail from './components/Episode';

const CharacterDetail = ({route, navigation}) => {

	const {id} = route?.params;

	const [character, setCharacter] = useState<CharacterModel>();
	const [episodes, setEpisodes] = useState<EpisodeModel[]>();

	useEffect(()=>{
		characterService.getCharacterDetail(id).then((res)=>{
			setCharacter(res.data);
			const episodesId = res.data?.episode.map((x)=>{
				return helperService.getIDfromUrl(x);
			})
			getEpisodes(episodesId.join());
		}).catch((err)=>{
			console.log(err);
		})
	},[id]);

	const getEpisodes = (ids) => {
		episodeService.getEpisodesFromIds(ids).then((res)=>{
			const eps = Array.isArray(res.data) ? res.data : [res.data];
			setEpisodes(eps);
		}).catch((err)=>{
			console.log(err)
		})
	}

	return(
		<ScrollView contentContainerStyle={{paddingBottom:1}} showsVerticalScrollIndicator={false}>
			<FastImage style={styles.profileImage} source={{uri:character?.image}}/>
			<Text style={styles.name}>{character?.name}</Text>
			<View style={styles.tableContainer}>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Status</Text>
					</View>
					<View style={styles.col}>
						<Text>{character?.status || '-'}</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Species</Text>
					</View>
					<View style={styles.col}>
						<Text>{character?.species || '-'}</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Type</Text>
					</View>
					<View style={styles.col}>
						<Text>{character?.type ||'-'}</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Gender</Text>
					</View>
					<View style={styles.col}>
						<Text>{character?.gender || '-'}</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Origin</Text>
					</View>
					<View style={styles.col}>
						<Text>{character?.origin?.name || '-'}</Text>
					</View>
				</View>
				
				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.th}>Location</Text>
					</View>
					<View style={styles.col}>
						<Text>{character?.location?.name || '-'}</Text>
					</View>
				</View>
			</View>

			<Text style={styles.title}>Episodes ({episodes?.length || 0})</Text>
			<FlatList
				contentContainerStyle={{marginLeft:10, marginTop:10, paddingRight:15}}
				data={episodes}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={(item)=>{
					return <EpisodeInCharacterDetail navigation={navigation} {...item}/>
				}}
				/>
			
		</ScrollView>
	)

}

export default CharacterDetail;