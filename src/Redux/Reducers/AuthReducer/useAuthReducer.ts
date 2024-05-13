import { useDispatch, useSelector } from 'react-redux';
import { AuthState, onChangeAuthState, resetAuthState } from './index'; // Adjust the path to your action creators

export const useAuthActions = () => {
    const dispatch = useDispatch();
    const { email, password, name, authLoading } = useSelector((state: { auth: AuthState }) => state.auth);

    const setAuthState = ({ prop, value }: { prop: keyof AuthState; value: string | boolean }) => {
        dispatch(onChangeAuthState({ prop, value }));
    };

    const onResetAuthState = () => {
        dispatch(resetAuthState());
    };

    return {
        onResetAuthState,
        setAuthState,
        email,
        password,
        name,
        authLoading
    };
};