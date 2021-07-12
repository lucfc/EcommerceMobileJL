import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from '@react-native-vector-icons/AntDesign';

import HomeScreen from '../../screens/CrudProdutos';
import BemVindo from '../../screens/BemVindo';
import ContatosScreen from './screens/Contato';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Login: {
        lib: AntDesign,
        name: 'adduser',
    },
    Contact: {
        lib: AntDesign,
        name: 'mail',
    },
};

export default function Navigation () {
    return (
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name} = icons [route.name];
                    return <Icon name = {name} size = {size} color = {color} />;
                },
            })}
            tabBarOptions = {{
                style: {
                    backgroundColor: '#000000',
                    borderTopColor: '#e9e9e9',
                },
                activeTintColor: 'white',
                inactiveTintColor: '#747474',
            }}
        >
            <Tab.Screen 
                name = "Home" 
                component = {HomeScreen} 
                options = {{
                    title: 'Início',
                }}
                />
            <Tab.Screen 
                name = "Login" 
                component = {BemVindo} 
                options = {{
                    title: 'BemVindo',
                }}
                />
            <Tab.Screen 
                name = "Contact" 
                component = {ContatoScreen} 
                options = {{
                    title: 'Contato',
                }}
                />
        </Tab.Navigator>
    );
}