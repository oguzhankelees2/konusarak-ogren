import {StyleSheet} from 'react-native'

import {Colors} from '@styles/colors';

export const styles = StyleSheet.create({
	container:{
		flex:1
	},
	tableContainer:{
		margin:15
	},
	row:{
		flexDirection:'row',
		paddingVertical:5,
		borderBottomWidth:.4
	},
	col:{
		flex:1
	},
	th:{
		fontWeight:'bold'
	},
	title:{
		marginLeft:15,
		fontWeight:'bold'
	},
	characterName:{
		fontSize:12,
		fontWeight:'bold'
	},
	characterImage:{
		width:90, 
		height:90, 
		borderRadius:100
	}
});