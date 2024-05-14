import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, fontSizes, fontWeights, globalStyles, lineHeights, validatePassword } from '@config';
import { scale, verticalScale } from 'react-native-size-matters';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Text from './text'

interface Props extends TextInputProps {
    label?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    placeholder?: string
    hint?: string
}

const Input: React.FC<Props> = ({ label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing, rightIcon, leftIcon, hint, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <TouchableWithoutFeedback
            style={{
                backgroundColor: colors.bg.primary,
                borderColor: isFocused ? colors.text.primary : colors.text.secondary,
                borderWidth: 1,
                borderRadius: verticalScale(8),
                paddingHorizontal: scale(15),
                width: '100%',
            }}
            onPress={() => handleFocus()}>
            {label &&
                <Text
                    value={label}
                    style={styles.labelStyle}
                />
            }
            <View style={styles.inputContainer}>
                {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
                <TextInput
                    style={[
                        styles.input,
                        {
                            paddingLeft: leftIcon ? 15 : 0,
                            paddingRight: rightIcon ? 15 : 0,
                        },
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={colors.text.secondary}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                />
                {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
            </View>
            {secureTextEntry && !validatePassword(value) && <Text style={{ fontSize: fontSizes.caption, color: colors.text.secondary, bottom: scale(5) }} str={hint} />}
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        paddingHorizontal: 10,
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: verticalScale(11),
        marginBottom: verticalScale(3.5),
        fontSize: fontSizes.button,
        fontWeight: fontWeights.regular,
        color: colors.text.primary,
    }, labelStyle: {
        fontSize: fontSizes.body,
        marginTop: lineHeights.copy,
        fontWeight: fontWeights.medium,
        color: colors.text.primary
    }
});

export default Input;