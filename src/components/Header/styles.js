import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
containerHeader: {
    marginVertical: 10,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    borderBottomWidth: 1,
    width: '100%',
  },
  containerHeaderBack: {
    width: '33%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
  },
  containerHeaderImageMode: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '33%',
  },
  containerHeaderImageLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '33%',
  },
  back: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 46,
    height: 33,
    resizeMode: 'contain',
  },
  switchModeDarkLight: {
    width: 30,
    height: 30,
    transform: [{rotate: '32.43deg'}],
  },
  headerText: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
  },
})