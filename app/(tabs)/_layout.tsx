import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

function TabLayout() {

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home-outline" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="settings" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

export default React.memo(TabLayout)