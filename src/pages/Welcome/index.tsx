import React, { useEffect, useState } from 'react';
import {View, Text, Alert} from 'react-native';

//Realm
import {CHARACTER_SCHEMA, CharacterSchema, getCharacterDetail, insertNewCharacter} from '@databases/allSchemas';

//Styles
import {styles} from './style';
import characterService from '@shared/services/character-service';
import FastImage from 'react-native-fast-image';

const Welcome = ({navigation}) => {


	useEffect(()=>{
		getCharacters();
	},[])


	const getCharacters = (url=null) => {
		characterService.getCharacters(url).then((res)=>{
			const {info} = res.data;
			insertNewCharacter(res.data?.results).then((v)=>{
				
				if(info.next == null){
					navigation.replace('Episodes');
				}else{
					redirect()
				}
			}).catch((err)=>{
				if(info.next == null){
					redirect()
				}else{
					getCharacters(info.next);
				}
			})
		}).catch((err)=>{
			console.log('Hataaa');
			Alert.alert('Hata', JSON.stringify(err));
		})
	}

	const redirect = () => {
		setTimeout(() => {
			navigation.replace('Episodes');
		}, 1500);
	}

	return(
		<View style={styles.container}>
			<FastImage resizeMode={FastImage.resizeMode.contain} source={{uri: 'https://www.pngarea.com/pngm/1/4957110_rick-and-morty-png-rick-y-morty-stickers.png'}} style={styles.logo}/>
			<Text style={styles.info}>Oğuzhan KELEŞ</Text>
		</View>
	)

}

export default Welcome;