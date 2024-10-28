import React, { useEffect } from 'react';
import { router } from 'expo-router';
import useAuth from '@/redux/reducers/authReducer/useAuthHook'

const useAppRouter = () => {
    const { uid, email, updateAuthState } = useAuth();

    useEffect(() => {
        console.log(uid, email, ' gowa')

        // Redirect based on authentication status
        if (!uid) {
            router.replace("/(public)/onboarding1");
        } else {
            router.replace("/(tabs)/home");
        }
    }, [uid]);
};

export default useAppRouter