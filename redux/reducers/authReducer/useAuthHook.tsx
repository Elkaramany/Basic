import { useDispatch, useSelector } from 'react-redux';
import { onChangeAuthState, resetAuthState } from '@/redux/reducers/authReducer';
import { AuthState } from './types';
import { createSelector } from 'reselect';

const selectAuthState = ((state: { Auth: AuthState }) => state.Auth);
const selectAuthFields = createSelector(
    selectAuthState,
    (authState) => ({
        uid: authState.uid,
        email: authState.email,
        name: authState.name,
        password: authState.password,
    })
);

const useAuth = () => {
    const dispatch = useDispatch();

    const { uid, email, name, password } = useSelector(selectAuthFields);

    const updateAuthState = (prop: keyof AuthState, value: string | boolean | null) => {
        dispatch(onChangeAuthState({ prop, value }));
    };

    const resetAuth = () => dispatch(resetAuthState());

    return {
        uid,
        email,
        name,
        password,
        updateAuthState,
        resetAuth,
    };
};

export default useAuth