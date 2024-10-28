import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, AuthState } from './types';

export type AuthStateType = string | boolean | null

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        onChangeAuthState(state: AuthState, action: PayloadAction<{ prop: keyof AuthState; value: AuthStateType }>) {
            const { prop, value } = action.payload;
            (state[prop] as AuthStateType) = value;
        },
        resetAuthState(state) {
            return initialState;
        },
    },
});


export const { onChangeAuthState, resetAuthState } = authSlice.actions;
export const reducer = authSlice.reducer;