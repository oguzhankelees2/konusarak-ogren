import React from "react";
import { Text, View } from "react-native";

//Third Party Libraries
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';

//Routers
import AppNavigator from "@shared/routers/app-navigator";

import { Colors } from "@shared/styles/colors";

const App = () => {

	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: Colors.mainColor
		},
	};

	return(
		<NavigationContainer theme={MyTheme}>
			<AppNavigator />
		</NavigationContainer>
	)

}

export default App;