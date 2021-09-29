import React from 'react';

//Third Party Libraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pages
import Welcome from '@pages/Welcome';
import Episodes from '@pages/Episodes';
import EpisodeDetail from '@pages/EpisodeDetail';
import CharacterDetail from '@pages/CharacterDetail';

const AppNavigator = () => {

	const Stack = createNativeStackNavigator();

	return(
		<Stack.Navigator initialRouteName='Welcome'>
			<Stack.Screen options={{headerShown:false}} name='Welcome' component={Welcome}/>
			<Stack.Screen options={{headerShown:false}} name='Episodes' component={Episodes}/>
			<Stack.Screen options={({ route }) => ({ title: route.params.title })} initialParams={{title: 'Episode Detail', id:0}} name='EpisodeDetail' component={EpisodeDetail}/>
			<Stack.Screen options={({ route }) => ({ title: route.params.title })} initialParams={{title: 'Character Detail', id:0}} name='CharacterDetail' component={CharacterDetail}/>
		</Stack.Navigator>
	)

}

export default AppNavigator;