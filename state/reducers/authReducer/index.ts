import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, authState } from './types';

export type authStateType = string | boolean | null

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChangeauthState(state: authState, action: PayloadAction<{ prop: keyof authState; value: authStateType }>) {
            const { prop, value } = action.payload;
            (state[prop] as authStateType) = value;
        },
        resetauthState(state) {
            return initialState;
        },
    },
});


export const { onChangeauthState, resetauthState } = authSlice.actions;
export const reducer = authSlice.reducer;