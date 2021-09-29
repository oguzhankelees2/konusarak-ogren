import {StyleSheet} from 'react-native'

import {Colors} from '@styles/colors';

export const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	logo:{
		width:200,
		height:100
	},
	info:{
		position:'absolute',
		bottom:10,
		fontWeight:'bold',
		fontSize:15
	}
});