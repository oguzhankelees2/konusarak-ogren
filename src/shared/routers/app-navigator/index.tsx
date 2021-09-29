import React from 'react';

//Third Party Libraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pages
import Episodes from '@pages/Episodes';
import EpisodeDetail from '@pages/EpisodeDetail';
import CharacterDetail from '@pages/CharacterDetail';

const AppNavigator = () => {

	const Stack = createNativeStackNavigator();

	return(
		<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Episodes'>
			<Stack.Screen name='Episodes' component={Episodes}/>
			<Stack.Screen name='EpisodeDetail' component={EpisodeDetail}/>
			<Stack.Screen name='CharacterDetail' component={CharacterDetail}/>
		</Stack.Navigator>
	)

}

export default AppNavigator;