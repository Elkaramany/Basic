import React, { RefObject, useRef } from 'react';
import { TextInput } from 'react-native';

const useOTPVerification = (codes: string[], setCodes: (val: string[]) => void) => {
    const refs: RefObject<TextInput>[] = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];
    const [errorMessages, setErrorMessages] = React.useState<string[]>();
    const [loading, setLoading] = React.useState(false);

    const onSubmit = async () => {
        setLoading(true)
        setLoading(false);
    };

    const handleResendEmail = async () => {

    };

    const onChangeCode = (text: string, index: number, isDelete: boolean) => {
        const newCodes = [...codes];

        if (isDelete) {
            // Handle deletion
            newCodes[index] = ''; // Clear the current index
            setCodes(newCodes);
            // Move focus to the previous index if not the first input
            if (index > 0) {
                refs[index - 1].current?.focus();
            }
        } else {
            if (text === '') {
                // Handle empty text without deletion flag
                // This could be a no-op or some specific logic if needed
            } else if (text.length === 1 && /^\d$/.test(text)) {
                // Handle single digit input
                newCodes[index] = text;
                setCodes(newCodes);
                // Move focus to the next input if not the last one, otherwise unfocus all
                if (index < 5) {
                    refs[index + 1].current?.focus();
                } else {
                    // If it's the last input, blur it to unfocus
                    refs.forEach(ref => ref.current?.blur());
                }
            } else if (text.length > 1) {
                // Handle paste operation with multiple digits
                const digits = text.split('').filter(char => /^\d$/.test(char)).slice(0, 6);
                digits.forEach((digit, i) => {
                    newCodes[i] = digit;
                    if (refs[i].current) {
                        refs[i].current.value = digit;
                    }
                });
                setCodes(newCodes);
                const nextIndex = digits.length < 6 ? digits.length : 5;
                if (nextIndex < 6) {
                    refs[nextIndex].current?.focus();
                } else {
                    // If pasting fills the last input, blur it to unfocus
                    refs.forEach(ref => ref.current?.blur());
                }
            }
        }
    };

    const validateCode = (code: string) => code.length >= 6

    return {
        codes,
        refs,
        errorMessages,
        loading,
        onSubmit,
        handleResendEmail,
        onChangeCode,
        validateCode
    };
};

export default useOTPVerification;