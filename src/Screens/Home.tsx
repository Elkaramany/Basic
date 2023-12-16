import React from 'react';
import { View, Image } from 'react-native';

import { Container, Input } from '@Components';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GlobalStyles, WIDTH, HEIGHT } from '@Config';
import { logo } from '@Assets'
import { AuthState, AuthStore } from '@Zustand'
import { verticalScale } from 'react-native-size-matters';

interface Props {
    navigation: any,
}

const Home: React.FC<Props> = ({ navigation }) => {
    const { email, password, updateAuthField } = AuthStore((state) => state);

    return (
        <Container>
            <Image
                source={logo}
                style={{
                    width: WIDTH * 0.4,
                    height: WIDTH * 0.4,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    borderRadius: 30
                }}
            />

            <Input
                value={email}
                onChangeText={(text) => updateAuthField('email', text)}
                label={'Email'}
                placeholder={'Email'}
            />
            <View style={{ height: verticalScale(10) }} />
            <Input
                value={password}
                onChangeText={(text) => updateAuthField('password', text)}
                label={'password'}
                placeholder={'password'}
                secureTextEntry
                hint={'Password must be at least 6 characters long and contain an uppercase letter, a lowercase letter, and a number.'}
            />

        </Container>
    )
}

export default Home
