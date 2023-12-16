export interface AuthState {
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