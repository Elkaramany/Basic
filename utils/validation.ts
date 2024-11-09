import { ShowToast } from "./validators";

export const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validatePassword = (password: string): boolean => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(password);
}

export const validateFullName = (name: string): boolean => {
    const re = /\S+\s+\S+/;
    return re.test(name);
}

export const validatePhoneNumber = (mobile: string): boolean => {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(mobile);
}

export const validateSignUpInfo = async (email: string, password: string, name: string, mobile: string): Promise<boolean> => {
    if (!email || !password || !name || !mobile) {
        ShowToast('error', 'Please fill all the fields');
        return false;
    }
    if (!validateEmail(email)) {
        ShowToast('error', 'Invalid email format');
        return false;
    }
    if (!validatePassword(password)) {
        ShowToast('error', 'Password must contain at least 6 characters', 'At least 1 uppercase letter, 1 lowercase letter and 1 number');
        return false;
    }
    if (!validateFullName(name)) {
        ShowToast('error', 'Please enter your full name');
        return false;
    }
    if (!validatePhoneNumber(mobile)) {
        ShowToast('error', 'Please enter a valid phone number');
        return false;
    }
    return true;
}

export const handleError = (error: any, context: string) => {
    if (error.code === 'auth/email-already-in-use') {
        ShowToast('error', 'That email address is already in use!', 'Try to login');
    } else if (error.code === 'auth/invalid-email') {
        ShowToast('error', 'That email address is invalid!');
    } else if (error.code === 'auth/user-not-found') {
        ShowToast('error', 'User not found');
    } else if (error.code === 'auth/wrong-password') {
        ShowToast('error', 'Wrong password');
    } else {
        ShowToast('error', `Something went wrong ${context}`, error.message);
    }
}
