import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, globalStyles, scale, verticalScale } from '@/constants';
import { ArrowDown } from '@/assets';

interface AnimatedTextComponentProps {
    onPress: () => void
}

const AnimatedTextComponent: React.FC<AnimatedTextComponentProps> = ({
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
            ]}
            onPress={onPress}
        >
            <ArrowDown />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: scale(50),
        borderRadius: 50,
        backgroundColor: colors.bg.arrow,
        ...globalStyles.centeredContainer,
        width: scale(50),
        alignSelf: 'center',
    },
});

export default React.memo(AnimatedTextComponent);