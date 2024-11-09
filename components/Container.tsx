import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { colors } from '@/constants'
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    parentContainerStyle?: ViewStyle
    childContainerStyle?: ViewStyle
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ parentContainerStyle, childContainerStyle, children }) => {

    return (
        <LinearGradient
            colors={[colors.bg.secondary, colors.bg.primary]}
            style={[styles.parent, parentContainerStyle]}>
            <View style={[styles.child, childContainerStyle,]}>
                {children}
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    child: {
        flex: 1,
        marginHorizontal: '3.5%',
        paddingTop: Constants.statusBarHeight
    }
})

export default Container