import React,{ useContext } from 'react';
import {StyleSheet } from 'react-native';
import { ModeContext } from '../../contexts/ContextDarkLight';

const { modeBoolean, setModeBoolean } = useContext(ModeContext);

export const styles = StyleSheet.create({
  container: {
    fontFamily: 'Montserrat-Regular',
  },
  searchBar: {
    borderRadius: 3.81,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 26,
    marginHorizontal: 10,
    height: 27.79,
    maxWidth: '94%',
  },
  inputSearch: {
    borderRadius: 5,
    color: 'black',
    marginHorizontal: '2%',
    width: '90%',
    height: 40,
    fontSize: 15,
  },
  ImgSearch: {
    height: 27.41,
    width: 27.41,
    tintColor: 'black',
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    width: '33%',
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
  novoProduto: {
    fontSize: 20,
    width: '100%',
    textAlign: 'right',
    paddingHorizontal: 16,
    marginTop: 10,
    // fontWeight: 'bold',
    marginBottom: 0,
    fontFamily: 'Montserrat-SemiBold',
  },
  item: {
    marginLeft: 12,
  },
  headerProduct: {
    flexDirection: 'row',
  },
  bodyProduct: {
    flexDirection: 'row',
    marginBottom: 30,
    paddingTop: 15,
    height: 100,
  },
  bodyDescription: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  crudButtons: {
    width: 30,
    height: 30,
    marginTop: 8,
    marginRight: 15,
  },
  nome: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
  },
  id: {
    alignSelf: 'center',
    marginLeft: 10,
    color: '#535353',
  },
  categoryLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcons: {
    justifyContent: 'space-around',
  },
  valor: {
    // fontWeight: 'bold',
    fontSize: 15,
  },
});
