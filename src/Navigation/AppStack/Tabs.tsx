import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Home from './Home'
import Cart from './Cart'
import Settings from './Settings'

import { GlobalStyles, Colors } from "@Config";
import { logo } from '@Assets'

const BottomTab = createBottomTabNavigator();

export default () => {

    return (
        <BottomTab.Navigator
            initialRouteName={'Home'}
            tabB
            screenOptions={{
                activeTintColor: '#979797',
                inactiveTintColor: Colors.secondary,
                headerShown: false,
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarStyle: { backgroundColor: Colors.backGround },
            }}
        >
            <BottomTab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <Image
                                    source={logo}
                                    resizeMode={'contain'}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Cart"}
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <Image
                                    source={logo}
                                    resizeMode={'contain'}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <Image
                                    source={logo}
                                    resizeMode={'contain'}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                        );
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    bottomTabContainer: {
        ...GlobalStyles.centeredContainer,
        top: verticalScale(5),
        padding: verticalScale(5)
    },
    tabText: {
        ...GlobalStyles.regularText,
        fontSize: scale(10),
        marginTop: scale(3)
    }
})