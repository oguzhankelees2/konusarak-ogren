import {StyleSheet} from 'react-native'

import {Colors} from '@styles/colors';

export const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingBottom:15,
		borderBottomWidth:.5
	},
	header:{
		margin:10
	},
	title:{
		fontSize:16,
		fontWeight:'bold',
		marginRight:70
	},
	infoContainer:{
		marginTop:-5,
		flexDirection:'row'
	},
	episode:{
		color:'grey'
	},
	date:{
		color:'grey',
		marginLeft:2,
		fontSize:10,
		alignSelf:'center'
	},
	moreDetail:{		
		position:'absolute',
		right:0,
		fontWeight:'bold',
		fontSize:12
	}
});