import React from 'react';
import { View } from 'react-native';

import { Container, RegText } from '@components';

import { GlobalStyles } from '@config';

interface Props {
    navigation: any,
}

const Home: React.FC<Props> = ({ navigation }) => {
    return (
        <Container>
            <View style={[GlobalStyles.centeredContainer, { flex: 1 }]}>
                <RegText str='Login' biggest={true} />
            </View>

        </Container>
    )
}

export default Home
