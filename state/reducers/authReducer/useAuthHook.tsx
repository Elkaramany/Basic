import { useDispatch, useSelector } from 'react-redux';
import { onChangeauthState, resetauthState } from '@/state/reducers/authReducer';
import { authState, initialState } from './types';
import { createSelector } from 'reselect';

interface RootState {
    auth: authState;
}

const selectAuthState = (state: RootState) => state.auth;

const selectAuthFields = createSelector(
    selectAuthState,
    (authState): authState => ({
        uid: authState.uid,
        id: authState.id,
        email: authState.email,
        phone: authState.phone,
        name: authState.name,
    })
);

const useAuth = () => {
    const dispatch = useDispatch();

    const {
        uid,
        id,
        email,
        name,
        phone
    } = useSelector(selectAuthFields) ?? initialState;

    const updateAuthState = (prop: keyof authState, value: string | boolean | null) => {
        dispatch(onChangeauthState({ prop, value }));
    };

    const resetAuth = () => dispatch(resetauthState());

    return {
        uid,
        id,
        email,
        name,
        phone,
        updateAuthState,
        resetAuth,
    };
};

export default useAuth;