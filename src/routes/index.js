import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BemVindo} from '../screens/BemVindo';
import {CrudProdutos} from '../screens/CrudProdutos';
import {Login} from '../screens/Login';
import {Navigation} from '../components/Navigation';
import {LogoutModal} from '../components/Modals/LogoutModal';

const AppStack = createStackNavigator();
export const Routes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{headerTransparent: true, headerShown: false}}>
      <AppStack.Screen name="BemVindo" component={BemVindo} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Navigation" component={Navigation} />
      <AppStack.Screen name="CrudProdutos" component={CrudProdutos} />
      <AppStack.Screen name="Logout" component={LogoutModal} />
    </AppStack.Navigator>
  );
};
