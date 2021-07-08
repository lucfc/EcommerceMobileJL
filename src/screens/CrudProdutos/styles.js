import {StyleSheet} from 'react-native';
import {RotationGestureHandler} from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  searchBar: {
    backgroundColor: '#e9e9e9',
    borderRadius: 3.81,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 30,
    marginHorizontal: 10,
    height: 27.79,
  },

  inputSearch: {
    borderRadius: 5,
    color: 'black',
    marginHorizontal: '2%',
    width: 360,
    height: 40,
    fontSize: 15,
  },
  ImgSearch: {
    height: 21.32,
    width: 22.84,
    backgroundColor: '#e9e9e9',
  },
  containerHeader: {
    marginVertical: 10,
    height: 40,
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
    width: 40,
    height: 31,
    resizeMode: 'contain',
  },
  switchModeDarkLight: {
    width: 30,
    height: 30,
    transform: [{rotate: '32.43deg'}],
  },
  headerText: {
    fontSize: 15,
  },
  novoProduto: {
    fontSize: 18,
    width: '100%',
    textAlign: 'right',
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
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
    fontSize: 19.04,
    fontWeight: 'bold',
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
});
