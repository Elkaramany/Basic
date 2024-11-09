import { useEffect } from 'react';
import { router } from 'expo-router';
import useAuth from '@/state/reducers/authReducer/useAuthHook'

const useAppRouter = () => {
    const { uid } = useAuth();

    useEffect(() => {
        if (!uid) {
            router.replace("/(public)/onboarding1");
        } else {
            router.replace("/(tabs)/home");
        }
    }, [uid]);
};

export default useAppRouter