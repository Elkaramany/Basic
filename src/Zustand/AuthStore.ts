import { get, setVal } from './MMKV'
import { create } from 'zustand';

// AuthState interface
interface AuthState {
    name: string;
    surname: string;
    email: string;
    password: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    number: string;
    updateAuthField: (field: keyof AuthState, value: string) => void;
}

// Create an auth store
export default create<AuthState>((set) => ({
    name: get('name'),
    surname: get('surname'),
    email: get('email'),
    password: get('password'),
    dateOfBirth: get('dateOfBirth'),
    gender: get('gender'),
    address: get('address'),
    number: get('number'),
    updateAuthField: (field, value) => {
        setVal(field, value)
        set({ [field]: value });
    },
}));