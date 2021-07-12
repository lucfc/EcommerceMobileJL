import React, {useContext} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Styles} from './styles';

import ImgLogo from '../../assets/icons/logo.png';
import IconLightMode from '../../assets/icons/lightMode.png';
import IconDarkMode from '../../assets/icons/darkMode.png';

import {useNavigation} from '@react-navigation/native';
import {ModeContext} from '../../contexts/ContextDarkLight';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const BemVindo = () => {
  const navigation = useNavigation();

  const {modeBoolean, setModeBoolean} = useContext(ModeContext);

  console.log(AsyncStorage.getItem('@logado'));

  return (
    <View
      style={[
        Styles.container,
        {backgroundColor: !modeBoolean ? '#fff' : '#000'},
      ]}>
      {/* View de login: Logo + botão Entrar + botão Cadastre-se  */}

      <View style={Styles.containerIconDarkLight}>
        <TouchableOpacity
          onPress={() => {
            setModeBoolean();
          }}>
          <Image
            source={modeBoolean ? IconLightMode : IconDarkMode}
            style={Styles.IconDarkMode}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.ImgLogo}>
        <Image
          source={ImgLogo}
          style={[Styles.ImgLogo, {tintColor: modeBoolean ? '#fff' : '#000'}]}
        />
      </View>

      <View>
        <TouchableOpacity
          style={[
            Styles.BotaoEntrar,
            {backgroundColor: modeBoolean ? '#fff' : '#c4c4c4'},
          ]}
          onPress={async () =>
            (await AsyncStorage.getItem('@logado')) === 'logou'
              ? navigation.navigate('Navigation')
              : navigation.navigate('Login')
          }>
          <Text style={Styles.TextoBotaoEntrar}> Entrar</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[
            Styles.BotaoCadastro,
            {backgroundColor: modeBoolean ? '#fff' : '#c4c4c4'},
          ]}>
          <Text style={Styles.TextoBotaoCadastro}>Cadastre-se</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
