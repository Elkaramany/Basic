import { colors, scale, textScale } from "@/constants";
import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import useOTPVerification from './useOtpVerification'

interface OTPInputProps {
    codes: string[];
    setCodes: (val: string[]) => void;
}
const otpInput: React.FC<OTPInputProps> = ({ codes, setCodes }) => {
    const {
        refs,
        errorMessages,
        onSubmit,
        handleResendEmail,
        onChangeCode,
        validateCode,
    } = useOTPVerification(codes, setCodes);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row-reverse",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 35,
            marginBottom: 20
        },
        input: {
            fontSize: textScale(16),
            height: scale(48),
            width: scale(48),
            borderRadius: scale(50),
            textAlign: "center",
            backgroundColor: "#FFFFFF0A",
            color: colors.text.primary,
            borderColor: colors.text.primary,
            borderWidth: 1,
        },
        errorInput: {
            borderColor: colors.brand.error,
            color: colors.brand.error,
        },
        focusedInput: {
            borderColor: colors.brand.primary,
        }
    });

    const handleFocus = (index: number) => setFocusedIndex(index);
    const handleBlur = () => setFocusedIndex(null);

    return (
        <View style={styles.container}>
            {codes.map((code, index) => (
                <TextInput
                    key={index}
                    autoComplete="one-time-code"
                    enterKeyHint="next"
                    style={[
                        styles.input,
                        errorMessages && styles.errorInput,
                        focusedIndex === index && styles.focusedInput,
                    ]}
                    inputMode="numeric"
                    onChangeText={(text) => onChangeCode(text, index, false)}
                    value={code}
                    onFocus={() => handleFocus(index)}
                    onBlur={handleBlur}
                    maxLength={1}
                    ref={refs[index]}
                    onKeyPress={({ nativeEvent: { key } }) => {
                        if (key === "Backspace") {
                            onChangeCode("", index, true);
                        }
                    }}
                />
            ))}
        </View>
    );
}

export default React.memo(otpInput)