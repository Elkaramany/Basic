import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from './types'

import { Login } from '@Screens';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={'Login'}
    >
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
