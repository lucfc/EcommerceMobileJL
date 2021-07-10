import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TelaLogin } from '../screens/TelaLogin'
import { CrudProdutos } from '../screens/CrudProdutos'
import { ola } from '../screens/Home';



const AppStack = createStackNavigator();
export const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }} >

      <AppStack.Screen name="TelaLogin" component={TelaLogin} />
      <AppStack.Screen name="CrudProdutos" component={CrudProdutos} />
      <AppStack.Screen name="OIE" component={ola} />

    </AppStack.Navigator>
  );
}