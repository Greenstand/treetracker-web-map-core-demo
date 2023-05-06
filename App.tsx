import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { API_URL } from "react-native-dotenv";

import MyStack from "./src/navigation/Stack";

const App = () => {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
};
export default App;
