import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        marginTop: 20,
    },
    buttonSim: {
        borderWidth: 1,
        borderColor: '#4BBE23',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonNao: {
        borderWidth: 1,
        borderColor: '#962b1b',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    textButtonSim:{
        fontSize: 20,
        color: '#4BBE23'
    },
    textButtonNao:{
        fontSize: 20,
        color: '#962b1b'
    },
    textError:{
        fontFamily: 'Montserrat-Regular',
        fontSize:10,
        color: 'red'
    },
})