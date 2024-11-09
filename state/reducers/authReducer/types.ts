export interface authState {
    uid: string | null;
    id: string
    email: string;
    phone: string;
    name: string;
}

export interface loggedInUser {
    email: string;
    name: string;
    phone: string;
    id: string;
    uid: string;
}

export const initialState: authState = {
    uid: null,
    id: '',
    email: '',
    phone: '',
    name: ''
};
