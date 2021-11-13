import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import Contato from '../../pages/Contato';

const Tab = createBottomTabNavigator();
const icons = {
    Home: {
        name: 'ios-home',
    },
    Sobre: {
        name: 'ios-people',
    },
    Contato: {
        name: 'ios-call',
    }
}
export default function Tabs() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Contato' component={Contato} />
        </Tab.Navigator>
    )
}
