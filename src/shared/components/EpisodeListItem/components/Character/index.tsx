import React, { useEffect, useState } from 'react';
import {View, Text, Pressable, ActivityIndicator, FlatList, StyleProp, ViewStyle, TextStyle, ImageStyle} from 'react-native';

//Third party libraries
import FastImage, { FastImageProps } from 'react-native-fast-image';

//Models
import { CharacterModel } from '@shared/models/character-model';

//Styles
import {styles} from './style';

interface CharacterInEpisodeProps{
	item: CharacterModel,
	navigation,
	imageStyle?: StyleProp<ImageStyle>
	textStyle?: StyleProp<TextStyle>
}

const CharacterInEpisode = ({item, navigation, imageStyle, textStyle}: CharacterInEpisodeProps) => {


	return(
		<Pressable onPress={()=>navigation.navigate('CharacterDetail', {id:item.id, title:item.name})} style={[styles.container, {width: imageStyle?.width || 50}]}>
			<FastImage style={[styles.image, imageStyle]} source={{
				uri: item.image
			}}/>
			<Text numberOfLines={2} lineBreakMode='clip' style={[styles.nameText, textStyle]}>
				{item.name}
			</Text>
		</Pressable>
	)

}

export default CharacterInEpisode;