import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from 'react-native';

// import { Container } from './styles';

const Sobre = ({ route }) => {

    const navigation = useNavigation();

    navigation.setOptions({
        title: `Sobre ${route.params?.nome}`
    })


    return (
        <View>
            <Text>Sobre</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button
                title="Voltar para tela Home"
                onPress={() => navigation.goBack()}
            />

            <Button
                title="Contato"
                onPress={() => navigation.navigate('Contato')}
            />
        </View>
    )
}

export default Sobre;