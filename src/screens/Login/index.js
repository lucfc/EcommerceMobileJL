import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';

import IconBack from '../../assets/icons/backArrow.png';
import IconLogo from '../../assets/icons/logo.png';
import IconDark from '../../assets/icons/darkMode.png';
import IconLight from '../../assets/icons/lightMode.png';
import IconVisibility from '../../assets/icons/visivel.png';
import IconInvisibility from '../../assets/icons/invisibility.png';

import FuncionarioService from '../../services/funcionarioService';
import {useNavigation} from '@react-navigation/native';
import {ModeContext} from '../../contexts/ContextDarkLight';
import {styles} from './sytles';
import { Header } from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {

  const navigation = useNavigation();

  const {modeBoolean, setModeBoolean} = useContext(ModeContext);

  const [id, setId] = useState();
  const [senha, setSenha] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [erro, setErro] = useState(false);

  const funcionarioService = new FuncionarioService();

  const entrar = () => {
    funcionarioService
      .getById(id)
      .then(res => {
        if (senha == res.nome) {
          setErro(false);
          navigation.navigate('Navigation');
          AsyncStorage.setItem('@logado', 'logou');
        } else {
          setErro(true)
        }
      })
      .catch(()=>setErro(true));
  };

  return (
    <View
      style={[
        styles.backGraud,
        {backgroundColor: modeBoolean ? '#000' : '#fff'},
      ]}>
      <Header/>
      <View>
        <View style={styles.containerInputUser}>
          <Text
            style={[styles.Usuario, {color: modeBoolean ? '#fff' : 'black'}]}>
            Usuário
          </Text>
          <TextInput
            paddingLeft={12}
            style={[
              styles.Caxinha,
              {backgroundColor: !modeBoolean ? '#c5c5c5' : '#fff'},
            ]}
            onChangeText={valueId => setId(valueId)}></TextInput>
        </View>
        <View style={styles.containerInputKey}>
          <Text style={[styles.Senha, {color: modeBoolean ? '#fff' : 'black'}]}>
            Senha
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: 320,
              borderRadius: 3,
              backgroundColor: !modeBoolean ? '#c5c5c5' : '#fff',
            }}>
            <TextInput
              secureTextEntry={passwordVisibility}
              paddingLeft={12}
              style={[
                styles.Caxinha1,
                {backgroundColor: !modeBoolean ? '#c5c5c5' : '#fff'},
              ]}
              onChangeText={valueSenha => setSenha(valueSenha)}></TextInput>
            <TouchableOpacity
              style={styles.visibility}
              onPress={() => setPasswordVisibility(!passwordVisibility)}>
              <Image
                source={passwordVisibility ? IconVisibility : IconInvisibility}
              />
            </TouchableOpacity>
          </View>
        </View>
        {erro ? (<Text style={styles.erro}>*Usuário ou senha inválidos</Text>) : <></>}
        <TouchableOpacity
          style={[
            styles.Caxinha2,
            {backgroundColor: !modeBoolean ? '#c5c5c5' : '#fff'},
          ]}
          onPress={() => entrar()}>
          <Text style={styles.Entrar1}> Entrar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
