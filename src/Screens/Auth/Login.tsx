import React from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';

import { Container, Input, Header, Text, Button } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { PlusIcon, homeBg } from '@assets';
import { colors, globalStyles } from '@config';
import { scale } from 'react-native-size-matters';

interface Props {
    navigation: AuthStacknavigationProp<'Login'>,
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, setEmail, password, name, setAuthState, onResetAuthState } = useAuthActions()

    return (
        <ImageBackground source={homeBg} style={{ flex: 1, paddingHorizontal: '3.5%' }}>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text value='Meals To Go' big style={{ alignSelf: 'center' }} />
                <View style={styles.authButtonsContainer}>
                    <Button
                        value='Login'
                        onPress={() => { }}
                        icon={<PlusIcon fill={colors.text.inverse} />}
                        buttonStyle={{ margin: scale(20), marginBottom: scale(5) }}
                    />

                    <Button
                        value='Register'
                        onPress={() => { }}
                        icon={<PlusIcon fill={colors.text.inverse} />}
                        buttonStyle={{ margin: scale(20), marginTop: scale(5) }}
                    />
                </View>

            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    authButtonsContainer: {
        width: '55%',
        alignSelf: 'center',
        backgroundColor: 'rgba(240, 240, 240, 0.5)', // Semi-transparent whitish color
        marginTop: scale(15),
    }
})

export default Login
