import React, {useContext} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Styles} from './styles';

import ImgLogo from '../../assets/icons/logo.png';
import IconLightMode from '../../assets/icons/lightMode.png';
import IconDarkMode from '../../assets/icons/darkMode.png';

import {useNavigation} from '@react-navigation/native';
import {ModeContext} from '../../contexts/ContextDarkLight';

export const TelaLogin = () => {
  const navigation = useNavigation();

  const {modeBoolean, setModeBoolean} = useContext(ModeContext);

  return (
    <View
      style={[
        Styles.container,
        {backgroundColor: !modeBoolean ? '#fff' : '#000'},
      ]}>
      {/* View de login: Logo + botão Entrar + botão Cadastre-se  */}

      <View>
        <TouchableOpacity onPress={() => setModeBoolean(!modeBoolean)}>
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
            {backgroundColor: modeBoolean ? '#fff' : '#535353'},
          ]}
          onPress={() => navigation.navigate('CrudProdutos')}>
          <Text style={Styles.TextoBotaoEntrar}> Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            Styles.BotaoCadastro,
            {backgroundColor: modeBoolean ? '#fff' : '#535353'},
          ]}>
          <Text style={Styles.TextoBotaoCadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
