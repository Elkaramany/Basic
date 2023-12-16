import { MMKV } from 'react-native-mmkv';
// Create a new instance of MMKV
const mmkv = new MMKV();

export const get = (field: string) => {
    return mmkv.getString(field) || ''
}

export const setVal = (field: any, value: string | number | boolean) => {
    mmkv.set(field, value);
}