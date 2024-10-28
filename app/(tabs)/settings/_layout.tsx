import { Stack } from 'expo-router';

const SettingsTabLayout = () => {
    return (
        <Stack initialRouteName='index'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
        </Stack>
    );
}

export default SettingsTabLayout