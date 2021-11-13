import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from 'react-native';

// import { Container } from './styles';

const Home = () => {
    const navigation = useNavigation();

    function irSobre() {
        navigation.navigate('Sobre', { nome: 'Andrei da pororoca', email: 'pororoca@andreizinho.com' });
    }


    return (
        <View>
            <Text>Home</Text>
            <Text>Bem vindo a tela Home!</Text>
            <Button
                title="Ir para tela Sobre"
                onPress={irSobre}
            />
        </View>
    );
}

export default Home;