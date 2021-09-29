import {StyleSheet} from 'react-native'

import {Colors} from '@styles/colors';

export const styles = StyleSheet.create({
	container:{
		flex:1
	},
	profileImage:{
		width:150,
		height:150,
		alignSelf:'center',
		margin:10,
		borderRadius:250
	},
	name:{
		fontSize:20,
		fontWeight:'bold',
		alignSelf:'center',
		marginHorizontal:50,
		textAlign:'center'
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
	}
});