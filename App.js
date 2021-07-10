import React from 'react';
// import { CrudProdutos } from './src/screens/CrudProdutos';
import {TelaLogin} from './src/screens/TelaLogin';
import {Routes} from './src/routes'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='transparent' translucent barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  )
}
export default App;
