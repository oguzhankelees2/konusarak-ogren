import React from "react";
import { View, Text, Pressable } from "react-native";

//Models
import { EpisodeModel } from "@shared/models/episode-model";

//styles
import {styles} from './style';

interface EpisodeInCharacterDetailProps{
	item:EpisodeModel,
	navigation
}

const EpisodeInCharacterDetail = ({item, navigation}: EpisodeInCharacterDetailProps) => {

	return(
		<Pressable onPress={()=>{navigation.navigate('EpisodeDetail', {id: item.id, title: item.name})}} style={styles.container}>
			<Text numberOfLines={1} style={styles.name}>{item.name}</Text>
			<Text style={styles.episode}>{item.episode}</Text>
		</Pressable>
	)

}

export default EpisodeInCharacterDetail;