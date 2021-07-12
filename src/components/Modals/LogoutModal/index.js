import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ModeContext} from '../../../contexts/ContextDarkLight';

import {styles} from './styles';

export const LogoutModal = ({navigation}) => {
  const {modeBoolean} = useContext(ModeContext);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: !modeBoolean ? '#fff' : '#000',
      }}>
      <View>
        <Text style={[styles.text, {color: modeBoolean ? '#fff' : '#000'}]}>
          Tem certeza que deseja sair?
        </Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.buttonSim}
          onPress={() => {
            AsyncStorage.removeItem('@logado')
            navigation.navigate('Login');
          }}>
          <Text style={styles.textButtonSim}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNao}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textButtonNao}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
