import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from '../../Screens/Auth/Home';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
};

export default MainStackNavigator;
