import React, {useContext, useState} from 'react';

import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

import {Styles} from './styles';

import ImgLogo from '../../assets/icons/logo.png';
import IconLightMode from '../../assets/icons/lightMode.png';
import IconDarkMode from '../../assets/icons/darkMode.png';
import FuncionarioService from '../../services/funcionarioService';

import {useNavigation} from '@react-navigation/native';
import {ModeContext} from '../../contexts/ContextDarkLight';

export const TelaLogin = () => {
  const navigation = useNavigation();

  const funcionarioService = new FuncionarioService();

  const {modeBoolean, setModeBoolean} = useContext(ModeContext);

  const [id, setId] = useState();
  const [senha, setSenha] = useState();

  const entrar = () => {
    funcionarioService
      .getById(id)
      .then(res => {
        if (senha == res.nome) {
          navigation.navigate('CrudProdutos');
        } else {
          ('Senha ou usuário inválido');
        }
      })
      .catch('Senha ou usuário inválido');
  };

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
            {backgroundColor: modeBoolean ? '#fff' : '#c4c4c4'},
          ]}
          onPress={() => entrar()}>
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
      <View>
        <TextInput
          style={{
            backgroundColor: '#000',
            color: '#fff',
            width: 180,
            marginTop: 10,
          }}
          onChangeText={data => setId(data)}
        />
        <TextInput
          style={{
            backgroundColor: '#000',
            color: '#fff',
            width: 180,
            marginTop: 10,
          }}
          onChangeText={data => setSenha(data)}
        />
      </View>
    </View>
  );
};
