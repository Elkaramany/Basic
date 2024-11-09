import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/state';
import useAppRouter from '@/hooks/useAppRouter';

export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "/onboarding1",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootLayoutNav />
      </PersistGate>
    </Provider>
  )
}

const RootLayoutNav = () => {
  // Hook to protect routes based on user authentication
  useAppRouter()

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(public)/email" />
    </Stack>

  );
}
