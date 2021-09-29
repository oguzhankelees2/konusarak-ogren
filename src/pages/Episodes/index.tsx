import React, { useEffect, useState } from 'react';
import {View, Text, Pressable, ActivityIndicator, FlatList} from 'react-native';

//Services
import episodeService from '@shared/services/episode-service';

//Models
import { EpisodeModel } from '@shared/models/episode-model';

//Components
import EpisodeListItem from '@shared/components/EpisodeListItem';

//Styles
import { Colors } from '@shared/styles/colors';
import {styles} from './style';

const Episodes = ({navigation}) => {

	const [loading, setLoading] = useState(false);

	const [nextPageUrl, setNextPageUrl] = useState('');
	const [prevPageUrl, setPrevPageUrl] = useState('');
	const [count, setCount] = useState(0);
	const [episodes, setEpisodes] = useState<EpisodeModel[]>([]);

	useEffect(()=>{
		getEpisodes();
	},[]);

	const getEpisodes = (url = null) => {
		setLoading(true);
		episodeService.getEpisodes(url).then((res)=>{
			const {next, prev, count} = res.data?.info;
			setNextPageUrl(next);
			setPrevPageUrl(prev);
			setCount(count);
			setEpisodes(res.data?.results);
			setLoading(false);
		}).catch((err)=>{
			setLoading(false);
			console.log(err);
		})
	}

	return(
		<View style={styles.container}>
			
			<View style={[styles.indicatorContainer, {display:loading ?'flex' : 'none'}]}>
				<ActivityIndicator color={'white'} size='large'/>
				<Text style={{color:'white', marginTop:10}}>    Please Wait...</Text>
			</View>
			
			
			<FlatList 
				ListHeaderComponent={<Text style={styles.title}>Episodes</Text>}
				data={episodes}
				keyExtractor={i=>i.id}
				renderItem={({item})=>{
					return <EpisodeListItem navigation={navigation} item={item} />
				}}
				ListFooterComponent={
					<View style={styles.paginationContainer}>
						<Pressable disabled={loading || prevPageUrl==null} style={styles.paginationButton} onPress={()=>getEpisodes(prevPageUrl)}>
							<Text>Prev</Text>
						</Pressable>
						{
							nextPageUrl==null
						}
						<Pressable disabled={loading || nextPageUrl==null} style={styles.paginationButton} onPress={()=>getEpisodes(nextPageUrl)}>
							<Text>Next</Text>
						</Pressable>
					</View>
				}
			/>
			
		</View>
	)

}

export default Episodes;