import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ModeContext} from '../../contexts/ContextDarkLight';

import {CrudProdutos} from '../../screens/CrudProdutos';
import { Contatos } from '../../screens/Contatos';
import {LogoutModal} from '../Modals/LogoutModal';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Contact: {
    lib: AntDesign,
    name: 'mail',
  },
  Sair: {
    lib: AntDesign,
    name: 'logout',
  },
};

export const Navigation = () => {
  const {modeBoolean, setModeBoolean} = useContext(ModeContext);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: modeBoolean ? 'black' : 'white',
          borderTopColor: !modeBoolean ? 'black' : 'white',
          borderTopWidth: 1,
          position: 'absolute',
        },
        activeTintColor: !modeBoolean ? 'black' : 'white',
        inactiveTintColor: '#747474',
      }}>
      <Tab.Screen
        name="Home"
        component={CrudProdutos}
        options={{
          title: 'Início',
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contatos}
        options={{
          title: 'Contato',
        }}
      />
      <Tab.Screen
        name="Sair"
        component={LogoutModal}
        options={{
          title: 'Sair',
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};
