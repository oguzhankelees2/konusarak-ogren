import {StyleSheet} from 'react-native'

import {Colors} from '@styles/colors';

export const styles = StyleSheet.create({
	container:{
		flex:1
	},
	title:{
		fontSize:20,
		margin:10
	},
	paginationContainer:{
		flexDirection:'row',
		justifyContent:'center'
	},
	paginationButton:{
		padding:10,
		borderWidth:1,
		borderColor: Colors.mainColor,
		borderRadius:5,
		margin:5
	},
	indicatorContainer:{
		position:'absolute',
		top:0, 
		bottom:0, 
		right:0, 
		left:0, 
		backgroundColor: '#00000050', 
		zIndex:99,
		justifyContent:'center',
		alignItems:'center'
	}
});