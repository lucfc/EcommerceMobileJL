import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import { Styles } from './styles';

import ImgLogo from '../../assets/icons/logo.png';
import IconDarkMode from '../../assets/icons/darkMode.png';

export const TelaLogin = () => {
    return (

        <View style={Styles.container}>



            {/* View de login: Logo + botão Entrar + botão Cadastre-se  */}

            <View>

                <Image source={IconDarkMode} style={Styles.IconDarkMode} />

            </View>

            < View style={Styles.ImgLogo}>

                <Image source={ImgLogo} style={Styles.ImgLogo} />

            </View>

            <View>

                <TouchableOpacity style={Styles.BotaoEntrar}>
                    <Text style={Styles.TextoBotaoEntrar}> Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.BotaoCadastro}>
                    <Text style={Styles.TextoBotaoCadastro}>Cadastre-se</Text>
                </TouchableOpacity>

            </View>


        </View>










    )
}