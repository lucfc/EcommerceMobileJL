import { StyleSheet } from "react-native";

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
      transform: [{ rotate: '32.43deg' }],
   },
   headerText: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Montserrat-Regular',
   },

   backGraud: {
      height: '100%',
      backgroundColor: 'white',

   },

   BarraGeral: {
      height: 20,
      width: 30,
      flexDirection: 'row',
      marginTop: 30,


   },

   Seta: {
      height: 20,
      width: 30,
      flexDirection: 'row',
      marginTop: 30,

   },

   Entrar: {

      width: 290,
      height: 45,
      marginTop: 30,
      fontWeight: '700',
      fontFamily: 'Montserrat-Regular',
   },

   Entrar1: {
      fontWeight: '700',
      fontSize: 15,
      alignSelf:'center'
   },

   JL: {
      height: 30,
      width: 30,
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 25,
      marginLeft: -135,
   },

   Lua: {
      height: 25,
      width: 25,
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: 28,
      marginLeft: 145,

   },

   Caxinha: {
      borderColor: '#c4c4c4',
      borderWidth: 1,
      height: 40,
      width: 310,
      alignSelf: 'center',
      backgroundColor: '#c4c4c4',
      marginTop: -20,



   },

   Caxinha1: {
      borderColor: '#c4c4c4',
      borderWidth: 1,
      height: 40,
      width: 280,
      alignSelf: 'center',
      backgroundColor: '#c4c4c4',
   },

   Usuario: {
      width: 290,
      height: 45,
      marginTop: 100,
      fontWeight: '700',
      marginLeft: 49,
      fontSize: 15,
      fontFamily: 'Montserrat-Regular',
      borderRadius:2
   },

   Usuario1: {
      marginTop: 23,
      width: 290,
      height: 45,
      fontWeight: '700',
      marginLeft: 49,
      fontSize: 15,
      fontFamily: 'Montserrat-Regular',
      borderRadius:2
   },

   Caxinha2: {
      justifyContent:'center',
      borderColor: '#c4c4c4',
      height: 30,
      width: 80,
      alignSelf: 'center',
      marginTop: 50,
      fontSize: 12,
      fontWeight: '700',
      borderRadius:5

   },

   JL1: {
      height: 50,
      width: 50,
      flexDirection: 'row',
      margin: 10,
      alignSelf: 'center',

   },

   visibility:{
      width: 30,
      height: 40,
      justifyContent: 'center',
      alignItems:'center',
      paddingRight:5
   }

});