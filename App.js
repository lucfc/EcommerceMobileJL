import React from 'react';
// import { CrudProdutos } from './src/screens/CrudProdutos';
import {TelaLogin} from './src/screens/TelaLogin';
import {Routes} from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ModeProvider} from './src/contexts/ContextDarkLight';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ModeProvider>
        <Routes />
      </ModeProvider>
    </NavigationContainer>
  );
};
export default App;
