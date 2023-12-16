import React from "react";
import { View } from 'react-native'
import { Colors, IOS } from '@Config';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './AuthStack'

const MainNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backGround, paddingTop: IOS ? getStatusBarHeight() : 0 }}>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    </View>
  );
};

export default MainNavigator;
