import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },

  ImgLogo: {
    height: 223,
    width: 185,
    paddingTop: 50,
  },
  BotaoEntrar: {
    height: 35,
    width: 322,
    borderRadius: 4,
    backgroundColor: 'grey',
    marginTop: 80,
    justifyContent: 'center',
  },
  BotaoCadastro: {
    height: 35,
    width: 322,
    borderRadius: 4,
    backgroundColor: 'grey',
    marginTop: 30,
    justifyContent: 'center',
  },
  TextoBotaoEntrar: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },

  TextoBotaoCadastro: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },

  IconDarkMode: {
    height: 30,
    width: 30,
    transform: [{rotate: '32.43deg'}],
    marginLeft: 340,
    marginTop: 15,
  },
});
