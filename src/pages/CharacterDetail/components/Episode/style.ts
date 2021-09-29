import {StyleSheet} from 'react-native'

import {Colors} from '@styles/colors';

export const styles = StyleSheet.create({
	container:{
		width:110,
		height:110,
		marginHorizontal:5,
		backgroundColor: Colors.mainColor,
		alignItems:'center',
		justifyContent:'center',
		padding:3,
		borderRadius:10
	},
	name:{
		fontWeight:'bold'
	},
	episode:{
		fontWeight:'400',
		color:'white'
	}
});