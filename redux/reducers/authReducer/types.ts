export interface AuthState {
    uid: string | null
    email: string;
    name: string;
    password: string;
}

export const initialState: AuthState = {
    uid: null,
    email: '',
    name: '',
    password: '',
};
