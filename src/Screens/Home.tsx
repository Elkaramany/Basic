import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyles } from '../Config/Constants';
import Header from '../Components/Header';

import { Container, RegText } from '../Components';

interface Props {
    navigation: any,
}

const Home: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch()
    const { email, password } = useSelector((state: any) => state.AuthReducer)

    return (
        <Container>
            <View style={[GlobalStyles.centeredContainer, { flex: 1 }]}>
                <RegText str='Login' biggest={true}/>
            </View>

        </Container>
    )
}

export default Home
