import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants';
import { TextStyle, scale } from 'react-native-size-matters';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from './Text';

interface Props extends TextInputProps {
    label?: string;
    parentContainerStyle?: ViewStyle
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    placeholder?: string;
    hint?: string;
    buttonStyle?: ViewStyle;
    onRightIconPress?: () => void;
    onLeftIconPress?: () => void;
    labelStyle?: TextStyle | ViewStyle | any;
    inputStyle?: TextStyle | ViewStyle | any;
    inputRef?: any
    toggleFocused?: () => void
    toggleBlurred?: () => void
}

const Input: React.FC<Props> = ({
    label, parentContainerStyle, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing, rightIcon, leftIcon, hint, buttonStyle, onRightIconPress, onLeftIconPress, labelStyle = {}, inputStyle, inputRef, toggleFocused, toggleBlurred, ...rest
}) => {

    return (
        <GestureHandlerRootView style={[styles.inputContainer, parentContainerStyle]}>
            {label && <Text value={label} body style={{ marginBottom: 10, marginLeft: 2 }} />}
            <View style={[styles.touchableContainer, buttonStyle]}>
                {leftIcon && (
                    <TouchableOpacity
                        onPress={onLeftIconPress}
                        style={styles.iconContainer}
                    >
                        {leftIcon}
                    </TouchableOpacity>
                )}
                <TextInput
                    ref={inputRef}
                    style={[styles.input, inputStyle, { width: rightIcon ? '72%' : '100%' }]}
                    numberOfLines={1}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.text.disabled}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={toggleFocused}
                    onBlur={toggleBlurred}
                    textContentType='oneTimeCode'
                    blurOnSubmit={true}
                    {...rest}
                />
                {rightIcon && (
                    <TouchableOpacity
                        onPress={() => {
                            if (onRightIconPress) {
                                onRightIconPress();
                            }
                        }}
                        style={styles.iconContainer}
                    >
                        {rightIcon}
                    </TouchableOpacity>
                )}
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    touchableContainer: {
        backgroundColor: Colors.bg.primary,
        borderColor: Colors.text.primary,
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingVertical: scale(15),
        paddingHorizontal: scale(12),
        color: Colors.text.primary,
    },
    iconContainer: {
        padding: 10,
    }
});

export default Input;
