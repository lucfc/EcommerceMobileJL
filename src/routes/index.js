import React from 'react';
import { Home } from '../screens/Home'
import { Login } from '../screens/Login'
import { CrudProdutos } from '../screens/CrudProdutos'
import { ModeProvider } from '../Contexts/ContextDarkLight';

export const Routes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{ headerTransparent: true, headerShown: false }}
    >
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="CrudProdutos" component={CrudProdutos} />
    </AppStack.Navigator>
  );
}