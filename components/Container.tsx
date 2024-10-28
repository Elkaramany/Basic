import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Colors } from '@/constants'
import Constants from 'expo-constants';

interface Props {
    parentContainerStyle?: ViewStyle
    childContainerStyle?: ViewStyle
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ parentContainerStyle, childContainerStyle, children }) => {

    return (
        <View style={[{ flex: 1, backgroundColor: Colors.bg.primary }, parentContainerStyle]}>
            <View style={[{ flex: 1, marginHorizontal: '3.5%', paddingTop: Constants.statusBarHeight }, childContainerStyle,]}>
                {children}
            </View>
        </View>
    )
}

export default Container