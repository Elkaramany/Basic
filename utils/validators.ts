import Toast from 'react-native-toast-message'

export const validateName = (name: string): boolean => {
    if (!name || name.length < 2) return false;
    return true;
}

export const validateEmail = (email: string): boolean => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return false;
    }
    return true;
}

export const validatePassword = (password: string | undefined): boolean => {
    if (!password || password === undefined) return false
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!password || !password.length || !password.match(passw)) {
        return false
    }
    return true
}

export const validatePhone = (phone: string) => {
    var regex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
    if (regex.test(phone)) return true
    return false
}


export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export const ShowToast = (type: string, text1: string, text2?: string) => {
    if (text2?.length) {
        Toast.show({
            type,
            text1,
            text2,
        });
    } else {
        Toast.show({
            type,
            text1,
        });
    }
}

export const ellipsisName = (name: string, length = 20) => {
    if (name.length > length) {
        return name.slice(0, length) + '...'
    }
    return name
}