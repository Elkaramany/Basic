import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyles } from '../Config/Constants';
import Header from '../Components/Header';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, RegText } from '../Components';

interface SocialButtonProps {

}

interface Props {
    navigation: StackNavigationProp<any, any>,
}

const SocialButton: React.FC<SocialButtonProps> = ({ }) => {
    return (
        <View>
            
        </View>
    )
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