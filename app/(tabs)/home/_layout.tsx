import { Stack } from 'expo-router';

const HomeTabLayout = () => {
    return (
        <Stack initialRouteName='index'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
        </Stack>
    );
}

export default HomeTabLayout
